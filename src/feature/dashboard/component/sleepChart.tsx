import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	ChartOptions,
	CategoryScale,
	LinearScale,
	Title,
	LineElement,
	PointElement,
	Filler,
	Tooltip
} from 'chart.js';
import { formatDate } from 'shared/constants/constant';
import { BedIcon } from 'shared/components/icons/icons';
import { ILineChartData, IUserData, IUserSleepData } from '../interface/dashboard';
import Spinner from 'shared/components/spinner/spinner';
ChartJS.register(CategoryScale, LinearScale, Title, LineElement, PointElement, Filler, Tooltip);

const SleepChart = () => {
	const userSleepWeek = useSelector((state: IUserData) => state.userSleepWeek);
	const userActivities = useSelector((state: IUserData) => state.userSleepActivity);
	const { week } = userSleepWeek;

	const transformData = () => {
		if (!userActivities) {
			return null;
		}
		const chartData: ILineChartData = {
			labels: [] as string[],
			datasets: [
				{
					label: 'Temperature',
					data: [],
					fill: true, // Fill the area under the line
					backgroundColor: '#EDFF64',
					borderColor: '#EDFF64', // Border color of the line,
					borderWidth: 10,
					borderDash: [],
					borderDashOffset: 0.0
				}
			]
		};

		userActivities.forEach((item: IUserSleepData) => {
			chartData.datasets[0].data.push(item.duration);
		});

		return chartData;
	};
	const chartData = transformData();
	console.log('chartData', chartData);
	const options: ChartOptions<'line'> = {
		plugins: {
			legend: {
				display: false
			},
			tooltip: {
				mode: 'index',
				intersect: true
			}
		},
		elements: {
			line: {
				tension: 0.4 // smooth lines
			}
		},
		scales: {
			x: {
				type: 'category',
				ticks: {
					display: false
				},
				grid: {
					display: false
				}
			},
			y: {
				type: 'linear',
				beginAtZero: true,
				ticks: {
					color: 'white',
					font: {
						weight: 'bold',
						size: 15
					}
				},
				grid: {
					display: false
				}
			}
		}
	};
	return (
		<div>
			<div className='flex align-items--center m--30'>
				<p className='font-size--40 font--semi-bold '>Sleep</p>
				<BedIcon className='ml--10 mt--10' />
			</div>
			<p className='font-size--30 font--medium ml--30 '>{formatDate(week)}</p>
			{chartData ? <Line data={chartData} options={options} /> : <Spinner />}
		</div>
	);
};

export default SleepChart;
