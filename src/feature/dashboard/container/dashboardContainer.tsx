import { Fragment } from 'react';
import DashboardHeader from '../component/dashboardHeader';
import UserProfile from '../component/userProfile';
import 'assets/styles/module/dashboard.scss';
const DashboardContainer = () => {
	return (
		<Fragment>
			<DashboardHeader />
			<UserProfile />
		</Fragment>
	);
};

export default DashboardContainer;
