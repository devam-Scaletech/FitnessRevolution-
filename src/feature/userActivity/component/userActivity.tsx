import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RedirectIcon } from 'shared/components/icons/icons';
import { IUserData } from 'feature/dashboard/interface/dashboard';
import UserActivityChart from './userActivityChart';

const UserActivity = () => {
	const userActivities = useSelector((state: IUserData) => state.userActivities);
	const navigate = useNavigate();
	const activityId = useParams();

	const userActivityDetails = userActivities.find((activityData) => activityData.id === activityId.activityId);

	const handleOnClick = () => {
		navigate('/dashboard');
	};
	return (
		<div>
			<div className='back--wrapper m--30 cursor--pointer flex flex--column' onClick={handleOnClick}>
				<div className='flex align-items--center'>
					<RedirectIcon className='back--icon' />
					<p className='font-size--50 text--neon-green ml--30 text--center font--semi-bold'>
						{userActivityDetails?.name}
					</p>
				</div>
			</div>

			<div className='flex mt--40 ml--60 mb--50 flex--wrap body_details__wrapper'>
				<div className='body_details__box justify-content--center border-radius--xxl p--20 mt--30 mr--30'>
					<div className='flex flex--column align-items--center body_details_content'>
						<p className='font-size--60 font--medium body_details__text'>{userActivityDetails?.duration}</p>
						<p className='font-size--22 font--semi-bold mt--20 body_details_subtext flex text--center'>
							Duration
						</p>
					</div>
				</div>

				<div className='body_details__box justify-content--center border-radius--xxl p--20 mt--30 mr--30'>
					<div className='flex flex--column align-items--center body_details_content'>
						<p className='font-size--60 font--medium body_details__text'>
							{userActivityDetails?.calories_burned}
						</p>
						<p className='font-size--22 font--semi-bold mt--20 body_details_subtext flex text--center '>
							Calories Burned
						</p>
					</div>
				</div>

				<div className='body_details__box justify-content--center border-radius--xxl p--20 mt--30 mr--30'>
					<div className='flex flex--column align-items--center body_details_content'>
						<p className='font-size--60 font--medium body_details__text'>
							{userActivityDetails?.heart_rate.average}
						</p>
						<p className='font-size--22 font--semi-bold flex align-items--center mt--20 body_details_subtext flex text--center'>
							Heart Rate Average
						</p>
					</div>
				</div>

				{userActivityDetails?.distance && (
					<div className='body_details__box justify-content--center border-radius--xxl p--20 mt--30 mr--30'>
						<div className='flex flex--column align-items--center body_details_content'>
							<p className='font-size--60 font--medium body_details__text'>
								{userActivityDetails?.distance}
							</p>
							<p className='font-size--22 font--semi-bold flex align-items--center mt--20 body_details_subtext flex text--center'>
								Distance
							</p>
						</div>
					</div>
				)}

				{userActivityDetails?.steps && (
					<div className='body_details__box justify-content--center border-radius--xxl p--20 mt--30 mr--30'>
						<div className='flex flex--column align-items--center body_details_content'>
							<p className='font-size--60 font--medium body_details__text'>
								{userActivityDetails?.steps}
							</p>
							<p className='font-size--22 font--semi-bold flex align-items--center mt--20 body_details_subtext flex text--center'>
								steps
							</p>
						</div>
					</div>
				)}

				{userActivityDetails?.pace?.average && (
					<div className='body_details__box justify-content--center border-radius--xxl p--20 mt--30 mr--30'>
						<div className='flex flex--column align-items--center body_details_content'>
							<p className='font-size--60 font--medium body_details__text'>
								{userActivityDetails?.pace?.average}
							</p>
							<p className='font-size--22 font--semi-bold flex align-items--center mt--20 body_details_subtext flex text--center'>
								Pace Average
							</p>
						</div>
					</div>
				)}

				{userActivityDetails?.elevation_gain && (
					<div className='body_details__box justify-content--center border-radius--xxl p--20 mt--30 mr--30'>
						<div className='flex flex--column align-items--center body_details_content'>
							<p className='font-size--60 font--medium body_details__text'>
								{userActivityDetails?.elevation_gain}
							</p>
							<p className='font-size--22 font--semi-bold flex align-items--center mt--20 body_details_subtext flex text--center'>
								Elevation Gain
							</p>
						</div>
					</div>
				)}

				{userActivityDetails?.speed?.average && (
					<div className='body_details__box justify-content--center border-radius--xxl p--20 mt--30 mr--30'>
						<div className='flex flex--column align-items--center body_details_content'>
							<p className='font-size--60 font--medium body_details__text'>
								{userActivityDetails?.speed?.average}
							</p>
							<p className='font-size--22 font--semi-bold flex align-items--center mt--20 body_details_subtext flex text--center'>
								Speed Average
							</p>
						</div>
					</div>
				)}

				{userActivityDetails?.reps?.total && (
					<div className='body_details__box justify-content--center border-radius--xxl p--20 mt--30 mr--30'>
						<div className='flex flex--column align-items--center body_details_content'>
							<p className='font-size--60 font--medium body_details__text'>
								{userActivityDetails?.reps?.total}
							</p>
							<p className='font-size--22 font--semi-bold flex align-items--center mt--20 body_details_subtext flex text--center'>
								Total Reps
							</p>
						</div>
					</div>
				)}

				{userActivityDetails?.weight_lifted?.total && (
					<div className='body_details__box justify-content--center border-radius--xxl p--20 mt--30 mr--30'>
						<div className='flex flex--column align-items--center body_details_content'>
							<p className='font-size--60 font--medium body_details__text'>
								{userActivityDetails?.weight_lifted?.total}
							</p>
							<p className='font-size--22 font--semi-bold flex align-items--center mt--20 body_details_subtext flex text--center'>
								Total Weight Lifted
							</p>
						</div>
					</div>
				)}

				{userActivityDetails?.laps && (
					<div className='body_details__box justify-content--center border-radius--xxl p--20 mt--30 mr--30'>
						<div className='flex flex--column align-items--center body_details_content'>
							<p className='font-size--60 font--medium body_details__text'>{userActivityDetails?.laps}</p>
							<p className='font-size--22 font--semi-bold flex align-items--center mt--20 body_details_subtext flex text--center'>
								Laps
							</p>
						</div>
					</div>
				)}

				{userActivityDetails?.pool_length && (
					<div className='body_details__box justify-content--center border-radius--xxl p--20 mt--30 mr--30'>
						<div className='flex flex--column align-items--center body_details_content'>
							<p className='font-size--60 font--medium body_details__text'>
								{userActivityDetails?.pool_length}
							</p>
							<p className='font-size--22 font--semi-bold flex align-items--center mt--20 body_details_subtext flex text--center'>
								Pool Length
							</p>
						</div>
					</div>
				)}

				{userActivityDetails?.strides && (
					<div className='body_details__box justify-content--center border-radius--xxl p--20 mt--30 mr--30'>
						<div className='flex flex--column align-items--center body_details_content'>
							<p className='font-size--60 font--medium body_details__text'>
								{userActivityDetails?.strides}
							</p>
							<p className='font-size--22 font--semi-bold flex align-items--center mt--20 body_details_subtext flex text--center'>
								Strides
							</p>
						</div>
					</div>
				)}

				{userActivityDetails?.strides && (
					<div className='body_details__box justify-content--center border-radius--xxl p--20 mt--30 mr--30'>
						<div className='flex flex--column align-items--center body_details_content'>
							<p className='font-size--60 font--medium body_details__text'>
								{userActivityDetails?.strides}
							</p>
							<p className='font-size--22 font--semi-bold flex align-items--center mt--20 body_details_subtext flex text--center'>
								Strokes
							</p>
						</div>
					</div>
				)}
			</div>
			{userActivityDetails?.weeklyData && (
				<div className='line-chart--container'>
					<p className='font-size--30 text--neon-green ml--30 font--semi-bold'>Weekly data</p>
					<UserActivityChart />
				</div>
			)}
		</div>
	);
};

export default UserActivity;
