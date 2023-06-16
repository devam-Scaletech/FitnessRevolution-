import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PulseIcon } from 'shared/components/icons/icons';
import { IUserData } from '../interface/dashboard';

const UserDetails = () => {
	const userActivities = useSelector((state: IUserData) => state.userActivities);

	const [averageHeartRateBpm, setAverageHeartRateBpm] = useState<number>();
	const [maxHeartRateBpm, setMaxHeartRateBpm] = useState<number>();

	const heartRateAverage = useCallback(() => {
		let averageHeartRate = 0;
		let maxHeartRate = 0;
		userActivities.forEach((activity) => {
			if (activity.heart_rate) {
				const { average, max } = activity.heart_rate;
				averageHeartRate += average;
				maxHeartRate += max;
			}
		});
		setAverageHeartRateBpm(averageHeartRate / userActivities.length);
		setMaxHeartRateBpm(maxHeartRate / userActivities.length);
	}, [userActivities]);

	useEffect(() => {
		heartRateAverage();
	}, []);

	return (
		<div className='user__widget border-radius--25 overflow--auto'>
			<p className='font-size--50 text--neon-green m--20 font--semi-bold'> Current Activity</p>
			<div className='flex align-items--center'>
				<p className='font-size--40 font--semi-bold m--20'>Pulse</p>
				<PulseIcon />
			</div>

			<p className='font-size--30 font--medium m--20'>
				{averageHeartRateBpm} - {maxHeartRateBpm} <span className='font--bold'>bpm</span>
			</p>
		</div>
	);
};

export default UserDetails;
