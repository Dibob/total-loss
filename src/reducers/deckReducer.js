import * as ActionsType from '../actions/constants';

export default function deckReducer(state = [], action) {
	switch (action.type) {
		case ActionsType.LOAD_DECKS:
			return [ ...action.data ];
		
		default:
			return state;
	}
}