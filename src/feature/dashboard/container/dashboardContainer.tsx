import DashboardHeader from '../component/dashboardHeader';
import UserProfile from '../component/userProfile';
import UserDetails from '../component/userDetails';
import 'assets/styles/module/dashboard.scss';
import FitnessActivity from '../component/fitnessActivity';

const DashboardContainer = () => {
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
