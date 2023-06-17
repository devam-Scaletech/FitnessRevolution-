import { Fragment, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { IChartData, IUserActivity, IUserData } from '../interface/dashboard';
import { barOptions } from 'shared/constants/constant';
import { PulseIcon } from 'shared/components/icons/icons';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler);

const PluseChart = () => {
	const userActivities = useSelector((state: IUserData) => state.userActivities);
	const [averageHeartRateBpm, setAverageHeartRateBpm] = useState<number>();
	const [maxHeartRateBpm, setMaxHeartRateBpm] = useState<number>();
	const transformData = () => {
		if (!userActivities) {
			return null;
		}
		const chartData: IChartData = {
			labels: [],
			datasets: [
				{
					label: 'Average Pulse',
					data: [],
					fill: true, // Fill the area under the line
					backgroundColor: '#EDFF64',
					borderColor: '#EDFF64',
					borderWidth: 0.5,
					barThickness: 6,
					borderRadius: 25
				}
			]
		};

		userActivities.forEach((item: IUserActivity) => {
			chartData.labels.push(item.name);
			chartData.datasets[0].data.push(Math.trunc(item.heart_rate.average));
		});

		return chartData;
	};

	const chartData = transformData();

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
		<Fragment>
			<div className='flex align-items--center m--30'>
				<p className='font-size--40 font--semi-bold '>Pulse</p>
				<PulseIcon />
			</div>
			<p className='font-size--30 font--medium ml--30 '>
				{averageHeartRateBpm} - {maxHeartRateBpm} <span className='font--bold'>bpm</span>
			</p>
			<Bar options={barOptions} data={chartData as IChartData} className='bar-chart--container m--30' />
		</Fragment>
	);
};

export default PluseChart;
