import React from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
} from 'chart.js';
import { formatDate, lineChartOption } from 'shared/constants/constant';
import { BedIcon } from 'shared/components/icons/icons';
import { ILineChartData, IUserActivity, IUserData, IUserSleepData } from '../../dashboard/interface/dashboard';
import Spinner from 'shared/components/spinner/spinner';
import { IActivity2, IWeeklyData } from 'feature/dashboard/interface/dashboard';
import { useParams } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const UserActivityChart = () => {
	const userActivities = useSelector((state: IUserData) => state.userActivities);

	const activityId = useParams();

	const userActivityDetails = userActivities.find((activityData) => activityData.id === activityId.activityId);

	const transformData = () => {
		if (!userActivityDetails) {
			return null;
		}
		const chartData: ILineChartData = {
			labels: [] as string[],
			datasets: [
				{
					label: 'duration',
					data: [],
					fill: true, // Fill the area under the line
					backgroundColor: 'rgba(237, 255, 100, 0.1)',
					borderColor: '#EDFF64', // Border color of the line,
					borderWidth: 4,
					borderDash: [],
					borderDashOffset: 0.0
				}
			]
		};

		userActivityDetails?.weeklyData?.activities.forEach((item: IActivity2) => {
			const convertTime = item?.distance;
			const formateDate = item.kcal;

			chartData.labels.push(formateDate.toString());
			convertTime && chartData.datasets[0].data.push(convertTime);
		});

		return chartData;
	};
	const chartData = transformData();

	return (
		<div className='ml--30 mt--30 '>
			{chartData ? <Line data={chartData} options={lineChartOption} className='line--chart' /> : <Spinner />}
		</div>
	);
};

export default UserActivityChart;
