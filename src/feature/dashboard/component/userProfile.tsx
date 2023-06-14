import { useCallback, useEffect, useState } from 'react';
import profilePic from 'assets/image/profilePic.jpg';
import { HumanBodyIcon, LocationPinIcon } from 'shared/components/icons/icons';
const UserProfile = () => {
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
			<div className='flex justify-content--start align-items--center width--20 pt--20 pb--20 ml--20'>
				<img
					src={profilePic}
					alt='profile picture'
					className='border-radius--25 width--full height--full object-fit--cover'
				/>
			</div>
			<div className='flex flex--column ml--25'>
				<div className='mt--20'>
					<p className='font-size--50 text--neon-green font--semi-bold'>{greeting}, John</p>
				</div>

				<div className='flex align-items--center mt--10'>
					<LocationPinIcon />
					<p className='font-size--22'>Ahmedabad , IN</p>
					<p className='font-size--22 ml--20'>22:59 pm</p>
				</div>

				<div className='flex mb--30 flex--wrap'>
					<div className='body_details__box justify-content--center border-radius--xxl p--20 mt--30 mr--30'>
						<div className='flex flex--column align-items--center'>
							<p className='font-size--60 font--medium'>
								52
								<span className='ml--10 font-size--30 text--grey text--grey-light font--semi-bold'>
									kg
								</span>
							</p>
							<p className='font-size--22 font--semi-bold flex align-items--center mt--20'>
								<HumanBodyIcon className='mr--5' />
								Weight
							</p>
						</div>
					</div>
					<div className='body_details__box justify-content--center border-radius--xxl p--20 mt--30 mr--30'>
						<div className='flex flex--column align-items--center'>
							<p className='font-size--60 font--medium'>
								170
								<span className='ml--10 font-size--30 text--grey-light font--semi-bold'>cm</span>
							</p>
							<p className='font-size--22 font--semi-bold flex align-items--center mt--20'>
								<HumanBodyIcon className='mr--5' />
								Weight
							</p>
						</div>
					</div>
					<div className='body_details__box justify-content--center border-radius--xxl p--20 mt--30 mr--30'>
						<div className='flex flex--column align-items--center'>
							<p className='font-size--60 font--medium'>21</p>
							<p className='font-size--22 font--semi-bold flex align-items--center mt--20'>
								<HumanBodyIcon className='mr--5' />
								Weight
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
