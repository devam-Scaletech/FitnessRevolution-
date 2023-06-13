import { useCallback, useEffect, useState } from 'react';
import profilePic from 'assets/image/profilePic.jpg';
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
		<div className='width--full'>
			<div className='profile__box border-radius--25  flex '>
				<div className='flex justify-content--center align-items--center width--35 p--25 '>
					<img
						src={profilePic}
						alt='profile picture'
						width={250}
						height={350}
						className='border-radius--25'
					/>
				</div>
				<div className='flex flex--column'>
					<div className='mt--20'>
						<p className='font-size--50 text--neon-green font--semi-bold'>{greeting}, John</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
