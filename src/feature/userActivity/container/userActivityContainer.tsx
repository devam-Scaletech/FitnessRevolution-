import { useDispatch } from 'react-redux';
import * as actionTypes from 'shared/store/actionTypes';
import { FITNESS_DATA } from 'shared/constants/constant';
import { createAction } from 'shared/util/utility';
import UserActivity from '../component/userActivity';
import '../style/userActivity.scss';

const UserActivityContainer = () => {
	const dispatch = useDispatch();
	const userActivity = FITNESS_DATA.activities;
	dispatch(createAction(actionTypes.USER_ACTIVITY, userActivity));

	return (
		<div>
			<UserActivity />
		</div>
	);
};

export default UserActivityContainer;
