import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HumanBodyIcon, LocationPinIcon } from 'shared/components/icons/icons';
import profilePic from 'assets/image/profilePic.jpg';
import { IUserData } from '../interface/dashboard';

const UserProfile = () => {
	const userDetails = useSelector((state: IUserData) => state.userDetails);
	const { name, weight, height, age } = userDetails;

	const [greeting, setGreeting] = useState('');

	const greetingMessage = useCallback(() => {
		const currentTime = new Date().getHours();
		if (currentTime >= 0 && currentTime < 12) {
			setGreeting('Good Morning');
		} else if (currentTime >= 12 && currentTime < 18) {
			setGreeting('Good Afternoon');
		} else {
			setGreeting('Good Evening');
		}
	}, []);

	useEffect(() => {
		greetingMessage();
	}, []);

	return (
		<div className='profile__box border-radius--25 flex m--30'>
			<div className='flex justify-content--start align-items--center width--20 pt--20 pb--20 ml--20 profile__wrapper'>
				<img
					src={profilePic}
					alt='profile picture'
					className='border-radius--25 width--full height--full object-fit--cover'
				/>
			</div>
			<div className='flex flex--column ml--25 profile_details__wrapper'>
				<div className='mt--20'>
					<p className='font-size--50 text--neon-green font--semi-bold greeting_text'>
						{greeting}, {name}
					</p>
				</div>

				<div className='flex align-items--center mt--10 location_wrapper'>
					<LocationPinIcon />
					<p className='font-size--22 location_text'>Ahmedabad , IN</p>
					<p className='font-size--22 ml--20 location_text'>22:59 pm</p>
				</div>

				<div className='flex mb--30 flex--wrap body_details__wrapper'>
					<div className='body_details__box justify-content--center border-radius--xxl p--20 mt--30 mr--30'>
						<div className='flex flex--column align-items--center body_details_content'>
							<p className='font-size--60 font--medium body_details__text'>
								{weight}
								<span className='ml--10 font-size--30 text--grey text--grey-light font--semi-bold'>
									kg
								</span>
							</p>
							<p className='font-size--22 font--semi-bold flex align-items--center mt--20 body_details_subtext'>
								<HumanBodyIcon className='mr--5' />
								Weight
							</p>
						</div>
					</div>
					<div className='body_details__box justify-content--center border-radius--xxl p--20 mt--30 mr--30'>
						<div className='flex flex--column align-items--center body_details_content'>
							<p className='font-size--60 font--medium body_details__text'>
								{height}
								<span className='ml--10 font-size--30 text--grey-light font--semi-bold'>cm</span>
							</p>
							<p className='font-size--22 font--semi-bold flex align-items--center mt--20 body_details_subtext'>
								<HumanBodyIcon className='mr--5' />
								Height
							</p>
						</div>
					</div>
					<div className='body_details__box justify-content--center border-radius--xxl p--20 mt--30 mr--30'>
						<div className='flex flex--column align-items--center body_details_content'>
							<p className='font-size--60 font--medium body_details__text'>{age}</p>
							<p className='font-size--22 font--semi-bold flex align-items--center mt--20 body_details_subtext'>
								<HumanBodyIcon className='mr--5' />
								Age
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
