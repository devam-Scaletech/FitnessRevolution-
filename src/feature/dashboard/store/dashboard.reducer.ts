// import * as actionTypes from 'store/actionTypes';
import * as actionTypes from 'shared/store/actionTypes';

import { IAction } from 'shared/store/state';
import { IUserData, IUserDetails, IUserActivity } from '../interface/dashboard';

const initialState: IUserData = {
	userDetails: {} as IUserDetails,
	userActivities: [] as IUserActivity[]
};

const reducer = (state: IUserData = initialState, action: IAction): IUserData => {
	switch (action.type) {
		case actionTypes.USER_DETAILS:
			return {
				...state,
				userDetails: action.payload
			};
		case actionTypes.USER_ACTIVITY:
			return {
				...state,
				userActivities: action.payload
			};
		default:
			return state;
	}
};
export default reducer;
