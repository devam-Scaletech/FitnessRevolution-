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
import Spinner from 'shared/components/spinner/spinner';
import { ILineChartData, IUserData, IUserSleepData } from '../interface/dashboard';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const SleepChart = () => {
	const userSleepWeek = useSelector((state: IUserData) => state.userSleepWeek);
	const userActivities = useSelector((state: IUserData) => state.userSleepActivity);
	const weekSleepDate = userSleepWeek.toString();

	const transformData = () => {
		if (!userActivities) {
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

		userActivities.forEach((item: IUserSleepData) => {
			const convertTime = item.duration / 60;
			chartData.labels.push(item.label);
			chartData.datasets[0].data.push(Math.round(convertTime));
		});

		return chartData;
	};
	const chartData = transformData();

	return (
		<div>
			<div className='flex align-items--center ml--30 mt--50 mb--20'>
				<p className='font-size--40 font--semi-bold '>Sleep</p>
				<BedIcon className='ml--10 mt--10' />
			</div>
			<p className='font-size--30 font--medium ml--30 '>{formatDate(weekSleepDate)}</p>
			{chartData ? <Line data={chartData} options={lineChartOption} className='m--30' /> : <Spinner />}
		</div>
	);
};

export default SleepChart;
