import DashboardHeader from '../component/dashboardHeader';
import UserProfile from '../component/userProfile';
import UserDetails from '../component/userDetails';
import 'assets/styles/module/dashboard.scss';

const DashboardContainer = () => {
	return (
		<div className='flex width--full '>
			<div className='width--60'>
				<DashboardHeader />
				<UserProfile />
			</div>
			<div className='width--40 height--full-viewport'>
				<UserDetails />
			</div>
		</div>
	);
};

export default DashboardContainer;
