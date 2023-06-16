import moment from 'moment';

export const FITNESS_DATA = {
	user: {
		id: '123456',
		name: 'John Doe',
		email: 'johndoe@example.com',
		age: 30,
		height: 180,
		weight: 75,
		oxygen_level: 98.5
	},
	activities: [
		{
			id: 'activity_1',
			name: 'Running',
			date: '2023-06-08',
			duration: 45,
			distance: 6.2,
			calories_burned: 500,
			heart_rate: {
				average: 150,
				max: 175
			},
			steps: 8000,
			pace: {
				average: 7.3,
				best: 6.5
			},
			weeklyData: {
				week: '2023-06-05 to 2023-06-11',
				activities: [
					{
						date: '2023-06-05',
						distance: 5.2,
						duration: '00:42:30',
						kcal: 400
					},
					{
						date: '2023-06-06',
						distance: 7.8,
						duration: '01:01:15',
						kcal: 600
					},
					{
						date: '2023-06-07',
						distance: 4.5,
						duration: '00:35:45',
						kcal: 350
					},
					{
						date: '2023-06-08',
						distance: 6.3,
						duration: '00:51:20',
						kcal: 480
					},
					{
						date: '2023-06-09',
						distance: 8.1,
						duration: '01:06:10',
						kcal: 700
					},
					{
						date: '2023-06-10',
						distance: 6.7,
						duration: '00:54:35',
						kcal: 520
					},
					{
						date: '2023-06-11',
						distance: 4.8,
						duration: '00:38:15',
						kcal: 380
					}
				]
			},
			elevation_gain: 80
		},
		{
			id: 'activity_2',
			name: 'Cycling',
			date: '2023-06-07',
			duration: 60,
			distance: 15.3,
			calories_burned: 700,
			heart_rate: {
				average: 135,
				max: 160
			},
			steps: 5000,
			speed: {
				average: 25.5,
				max: 32.8
			},
			weeklyData: {
				week: '2023-06-05 to 2023-06-11',
				activities: [
					{
						date: '2023-06-05',
						distance: 15.2,
						duration: '01:30:00',
						kcal: 600
					},
					{
						date: '2023-06-06',
						distance: 12.8,
						duration: '01:15:45',
						kcal: 550
					},
					{
						date: '2023-06-07',
						distance: 18.5,
						duration: '02:00:30',
						kcal: 750
					},
					{
						date: '2023-06-08',
						distance: 14.3,
						duration: '01:25:15',
						kcal: 580
					},
					{
						date: '2023-06-09',
						distance: 20.1,
						duration: '02:20:30',
						kcal: 850
					},
					{
						date: '2023-06-10',
						distance: 16.7,
						duration: '01:45:20',
						kcal: 700
					},
					{
						date: '2023-06-11',
						distance: 13.8,
						duration: '01:20:45',
						kcal: 580
					}
				]
			},
			elevation_gain: 120
		},
		{
			id: 'activity_3',
			name: 'Strength Training',
			date: '2023-06-06',
			duration: 75,
			calories_burned: 400,
			heart_rate: {
				average: 120,
				max: 145
			},
			reps: {
				total: 120,
				sets: 3,
				average_per_set: 40
			},
			weight_lifted: {
				total: 2000,
				average_per_rep: 16.7
			}
		},
		{
			id: 'activity_4',
			name: 'Swimming',
			date: '2023-06-05',
			duration: 60,
			distance: 1.5,
			calories_burned: 350,
			heart_rate: {
				average: 125,
				max: 140
			},
			laps: 20,
			pool_length: 25,
			weeklyData: {
				week: '2023-06-05 to 2023-06-11',
				activities: [
					{
						date: '2023-06-05',
						distance: 1.5,
						duration: '00:45:00',
						kcal: 300
					},
					{
						date: '2023-06-06',
						distance: 1.8,
						duration: '00:50:00',
						kcal: 330
					},
					{
						date: '2023-06-07',
						distance: 2.2,
						duration: '01:00:00',
						kcal: 400
					},
					{
						date: '2023-06-08',
						distance: 2.0,
						duration: '00:55:00',
						kcal: 370
					},
					{
						date: '2023-06-09',
						distance: 2.5,
						duration: '01:10:00',
						kcal: 450
					},
					{
						date: '2023-06-10',
						distance: 2.3,
						duration: '01:05:00',
						kcal: 420
					},
					{
						date: '2023-06-11',
						distance: 1.7,
						duration: '00:50:00',
						kcal: 330
					}
				]
			}
		},
		{
			id: 'activity_5',
			name: 'Hiking',
			date: '2023-06-04',
			duration: 120,
			distance: 8.5,
			calories_burned: 600,
			heart_rate: {
				average: 130,
				max: 155
			},
			elevation_gain: 450
		},
		{
			id: 'activity_6',
			name: 'Yoga',
			date: '2023-06-03',
			duration: 60,
			calories_burned: 200,
			heart_rate: {
				average: 90,
				max: 110
			}
		},
		{
			id: 'activity_7',
			name: 'Elliptical',
			date: '2023-06-02',
			duration: 45,
			calories_burned: 400,
			heart_rate: {
				average: 125,
				max: 150
			},
			distance: 5.0,
			strides: 3500
		},
		{
			id: 'activity_8',
			name: 'Basketball',
			date: '2023-06-01',
			duration: 90,
			calories_burned: 800,
			heart_rate: {
				average: 140,
				max: 165
			}
		},
		{
			id: 'activity_9',
			name: 'Pilates',
			date: '2023-05-31',
			duration: 60,
			calories_burned: 250,
			heart_rate: {
				average: 100,
				max: 120
			}
		},
		{
			id: 'activity_10',
			name: 'Rowing',
			date: '2023-05-30',
			duration: 30,
			distance: 2.5,
			calories_burned: 300,
			heart_rate: {
				average: 115,
				max: 135
			},
			strokes: 500
		},
		{
			id: 'activity_11',
			name: 'Kickboxing',
			date: '2023-05-29',
			duration: 60,
			calories_burned: 600,
			heart_rate: {
				average: 150,
				max: 170
			}
		},
		{
			id: 'activity_12',
			name: 'Soccer',
			date: '2023-05-28',
			duration: 120,
			calories_burned: 800,
			heart_rate: {
				average: 145,
				max: 170
			},
			weeklyData: {
				week: '2023-06-05 to 2023-06-11',
				activities: [
					{
						date: '2023-06-05',
						duration: '02:00:00',
						kcal: 800
					},
					{
						date: '2023-06-06',
						duration: '01:30:00',
						kcal: 600
					},
					{
						date: '2023-06-07',
						duration: '02:15:00',
						kcal: 900
					},
					{
						date: '2023-06-08',
						duration: '01:45:00',
						kcal: 700
					},
					{
						date: '2023-06-09',
						duration: '02:30:00',
						kcal: 1000
					},
					{
						date: '2023-06-10',
						duration: '01:45:00',
						kcal: 700
					},
					{
						date: '2023-06-11',
						duration: '01:30:00',
						kcal: 600
					}
				]
			}
		},
		{
			id: 'activity_13',
			name: 'CrossFit',
			date: '2023-05-27',
			duration: 60,
			calories_burned: 500,
			heart_rate: {
				average: 155,
				max: 180
			}
		},
		{
			id: 'activity_14',
			name: 'Tennis',
			date: '2023-05-26',
			duration: 90,
			calories_burned: 700,
			heart_rate: {
				average: 140,
				max: 165
			}
		},
		{
			id: 'activity_15',
			name: 'Dancing',
			date: '2023-05-25',
			duration: 45,
			calories_burned: 300,
			heart_rate: {
				average: 120,
				max: 145
			}
		},
		{
			id: 'activity_16',
			name: 'Pilates',
			date: '2023-05-24',
			duration: 60,
			calories_burned: 250,
			heart_rate: {
				average: 100,
				max: 120
			}
		},
		{
			id: 'activity_17',
			name: 'Rowing',
			date: '2023-05-23',
			duration: 30,
			distance: 2.5,
			calories_burned: 300,
			heart_rate: {
				average: 115,
				max: 135
			},
			strokes: 500
		},
		{
			id: 'activity_18',
			name: 'Kickboxing',
			date: '2023-05-22',
			duration: 60,
			calories_burned: 600,
			heart_rate: {
				average: 150,
				max: 170
			}
		},
		{
			id: 'activity_19',
			name: 'Soccer',
			date: '2023-05-21',
			duration: 120,
			calories_burned: 800,
			heart_rate: {
				average: 145,
				max: 170
			}
		},
		{
			id: 'activity_20',
			name: 'CrossFit',
			date: '2023-05-20',
			duration: 60,
			calories_burned: 500,
			heart_rate: {
				average: 155,
				max: 180
			}
		}
	],
	sleepDataWeekly: {
		week: '2023-06-12 to 2023-06-18',
		activities: [
			{
				date: '2023-06-12',
				duration: 480,
				heart_rate: {
					average: 60,
					max: 80
				}
			},
			{
				date: '2023-06-13',
				duration: 450,
				heart_rate: {
					average: 65,
					max: 85
				}
			},
			{
				date: '2023-06-14',
				duration: 500,
				heart_rate: {
					average: 62,
					max: 82
				}
			},
			{
				date: '2023-06-15',
				duration: 510,
				heart_rate: {
					average: 63,
					max: 81
				}
			},
			{
				date: '2023-06-16',
				duration: 490,
				heart_rate: {
					average: 61,
					max: 79
				}
			},
			{
				date: '2023-06-17',
				duration: 480,
				heart_rate: {
					average: 59,
					max: 78
				}
			},
			{
				date: '2023-06-18',
				duration: 460,
				heart_rate: {
					average: 63,
					max: 83
				}
			}
		]
	}
};

export const formatDate = (inputDate: string) => {
	if (inputDate?.includes(' to ')) {
		const startDate = moment(inputDate.split(' to ')[0]).format('DD MMMM YYYY');
		const endDate = moment(inputDate.split(' to ')[1]).format('DD MMMM YYYY');
		return `${startDate} to ${endDate}`;
	} else {
		return moment(inputDate).format('DD MMMM YYYY');
	}
};

export const barOptions = {
	responsive: true,
	scales: {
		x: {
			grid: {
				display: false
			},
			ticks: {
				display: false
			}
		},
		y: {
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
	},
	plugins: {
		legend: {
			display: false
		},
		title: {
			display: false,
			text: ''
		}
	}
};
