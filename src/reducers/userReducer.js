import UserActionsType from '../actions/constants/userActionsType';

export default function userReducer(state = [], action) {
	switch (action.type) {
		case UserActionsType.ADD_USER:
			action.user.score = 0;
			const users = [
				...state,
				action.user
			];
			console.log(`Users added ${users[users.length-1].name}`);
			return users;

		default:
			return state;
	}
}