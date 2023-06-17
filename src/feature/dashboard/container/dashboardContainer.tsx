import { useDispatch } from 'react-redux';
import { FITNESS_DATA } from 'shared/constants/constant';
import * as actionTypes from 'shared/store/actionTypes';
import { createAction } from 'shared/util/utility';
import DashboardHeader from '../component/dashboardHeader';
import UserProfile from '../component/userProfile';
import UserDetails from '../component/userDetails';
import FitnessActivity from '../component/fitnessActivity';
import '../style/dashboard.scss';

const DashboardContainer = () => {
	const dispatch = useDispatch();
	const userProfileDetails = FITNESS_DATA.user;
	const userActivity = FITNESS_DATA.activities;
	const userSleepActivity = FITNESS_DATA.sleepDataWeekly.week;
	const userSleepActivities = FITNESS_DATA.sleepDataWeekly.activities;
	dispatch(createAction(actionTypes.USER_DETAILS, userProfileDetails));
	dispatch(createAction(actionTypes.USER_ACTIVITY, userActivity));
	dispatch(createAction(actionTypes.USER_SLEEP_WEEK, userSleepActivity));
	dispatch(createAction(actionTypes.USER_SLEEP_ACTIVITY, userSleepActivities));
	return (
		<div className='flex width--full dashboard__container'>
			<div className='width--60  dashboard__wrapper'>
				<DashboardHeader />
				<UserProfile />
				<FitnessActivity />
			</div>
			<div className='width--40 height--full-viewport user_details__container'>
				<UserDetails />
			</div>
		</div>
	);
};

export default DashboardContainer;
