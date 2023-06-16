// import * as actionTypes from 'store/actionTypes';
import * as actionTypes from 'shared/store/actionTypes';

import { IAction } from 'shared/store/state';
import { IUserData, IUserDetails, IUserActivity, IUserSleepData, IUserSleepWeek } from '../interface/dashboard';

const initialState: IUserData = {
	userDetails: {} as IUserDetails,
	userActivities: [] as IUserActivity[],
	userSleepWeek: {} as IUserSleepWeek,
	userSleepActivity: [] as IUserSleepData[]
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
		case actionTypes.USER_SLEEP_WEEK:
			return {
				...state,
				userSleepWeek: action.payload
			};
		case actionTypes.USER_SLEEP_ACTIVITY:
			return {
				...state,
				userSleepActivity: action.payload
			};
		default:
			return state;
	}
};
export default reducer;
