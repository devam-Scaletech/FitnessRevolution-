import PulseChart from './pluseChart';
import SleepChart from './sleepChart';

const UserDetails = () => {
	return (
		<div className='user__widget border-radius--25'>
			<p className='font-size--50 text--neon-green m--20 font--semi-bold'> Current Activity</p>
			<PulseChart />
			<SleepChart />
		</div>
	);
};

export default UserDetails;
