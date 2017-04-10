import * as ActionsType from './constants';
import DeckService from '../services/deck';

export const startGame = (deckId, users) => {
	return (dispatch) => {
		DeckService.get(deckId)
			.then((response) => {
				console.log(`Response of deck service ${response}`);
				dispatch({
					type: ActionsType.START_GAME,
					payload: response,
					users
				});
			})
			.catch((error) => {
				console.error(error);
			});
	};
};

export const addPoint = (amountToAdd) => {
	console.log('Amount to add ======> ', amountToAdd);
	return {
		type: ActionsType.ADD_POINT,
		amountToAdd
	};
};

export const subtractPoint = (userIndex, amountToSubtract, game) => {
	return {
		type: ActionsType.SUBTRACT_POINT,
		userIndex,
		amountToSubtract,
		game
	};
};