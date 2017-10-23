// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { getDeckList, selectDeck } from '../../../data/deck/actions';

import DeckSelectComponent from './component';
import Loading from '../../../components/Loading';
import type { Deck } from '../../../data/deck/state';

type DeckSelectProps = {
  fetchDecks: Function,
  fetchDeck: Function,
  decks: Array<Deck>,
};

class DeckSelect extends React.Component<DeckSelectProps> {
  componentDidMount() {
    this.props.fetchDecks();
  }

  selectDeck(deckId) {
    this.props.fetchDeck(deckId);
  }

  render() {
    if (this.props.decks.length === 1) {
      return <Loading />;
    }

    return <DeckSelectComponent {...this.props} selectDeck={deckId => this.selectDeck(deckId)} />;
  }
}

const mapStateToProps = state => ({
  decks: state.deck.list,
});

const mapDispatchToProps = dispatch => ({
  fetchDecks: () => dispatch(getDeckList()),
  fetchDeck: deckId => dispatch(selectDeck(deckId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckSelect);
