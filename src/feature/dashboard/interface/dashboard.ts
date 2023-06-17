import { ReactNode } from 'react';

export interface IFitnessIcon {
	[key: string]: ReactNode;
}

export interface IUserData {
	userDetails: IUserDetails;
	userActivities: IUserActivity[];
	userSleepWeek: IUserSleepWeek;
	userSleepActivity: IUserSleepData[];
}
export interface IUserDetails {
	id: string;
	name: string;
	email: string;
	age: number;
	height: number;
	weight: number;
	oxygen_level: number;
}

export interface IUserActivity {
	id: string;
	name: string;
	date: string;
	duration: number;
	distance?: number;
	calories_burned: number;
	heart_rate: IHeartRate;
	steps?: number;
	pace?: IPace;
	weeklyData?: IWeeklyData;
	elevation_gain?: number;
	speed?: ISpeed;
	reps?: IReps;
	weight_lifted?: IWeightLifted;
	laps?: number;
	pool_length?: number;
	strides?: number;
	strokes?: number;
}

export interface IUserSleepWeek {
	week: string;
}
export interface IUserSleepData {
	date: string;
	duration: number;
	heart_rate: IHeartRate;
	label: string;
}
export interface IHeartRate {
	average: number;
	max: number;
}

export interface IPace {
	average: number;
	best: number;
}

export interface IWeeklyData {
	week: string;
	activities: IActivity2[];
}

export interface IActivity2 {
	date: string;
	duration: string;
	kcal: number;
	distance?: number;
}

export interface ISpeed {
	average: number;
	max: number;
}

export interface IReps {
	total: number;
	sets: number;
	average_per_set: number;
}

export interface IWeightLifted {
	total: number;
	average_per_rep: number;
}

export interface IChartData {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		fill: boolean;
		backgroundColor: string;
		borderColor: string;
		borderWidth: number;
		barThickness: number;
		borderRadius: number;
	}[];
}

export interface ILineChartData {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		fill: boolean;
		backgroundColor: string;
		borderColor: string;
		borderWidth: number;
		borderDash: number[];
		borderDashOffset: number;
	}[];
}
