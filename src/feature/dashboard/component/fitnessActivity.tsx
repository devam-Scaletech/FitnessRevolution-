import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper';
import ProgressBar from '@ramonak/react-progress-bar';
import {
	BasketBallIcon,
	CrossFitIcon,
	DancingIcon,
	EllipticalIcon,
	HikingIcon,
	HumanCycleIcon,
	HumanWalkIcon,
	KickboxingIcon,
	MedicationIcon,
	PilatesIcon,
	RedirectIcon,
	RowingIcon,
	SoccerIcon,
	StrengthIcon,
	SwimmingIcon,
	TennisIcon
} from 'shared/components/icons/icons';
import { formatDate } from 'shared/constants/constant';
import { IFitnessIcon, IUserData } from '../interface/dashboard';

const FitnessActivity = () => {
	const userActivities = useSelector((state: IUserData) => state.userActivities);
	const navigate = useNavigate();
	const fitnessIconMapper: IFitnessIcon = {
		activity_1: <HumanWalkIcon />,
		activity_2: <HumanCycleIcon />,
		activity_3: <StrengthIcon />,
		activity_4: <SwimmingIcon />,
		activity_5: <HikingIcon />,
		activity_6: <MedicationIcon />,
		activity_7: <EllipticalIcon />,
		activity_8: <BasketBallIcon />,
		activity_9: <PilatesIcon />,
		activity_10: <RowingIcon />,
		activity_11: <KickboxingIcon />,
		activity_12: <SoccerIcon />,
		activity_13: <CrossFitIcon />,
		activity_14: <TennisIcon />,
		activity_15: <DancingIcon />,
		activity_16: <PilatesIcon />,
		activity_17: <RowingIcon />,
		activity_18: <KickboxingIcon />,
		activity_19: <SoccerIcon />,
		activity_20: <CrossFitIcon />
	};
	const handleOnClick = (activityId: string) => {
		console.log('activityId', activityId);
		navigate(`/activity/${activityId}`);
	};
	return (
		<div className='mt--65 flex justify-content--start'>
			<Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]}>
				{userActivities.map((activities) => {
					const { name, calories_burned, date, id } = activities;
					return (
						<SwiperSlide key={id}>
							<div
								className='redirect--wrapper position--absolute cursor--pointer'
								onClick={() => handleOnClick(id)}
							>
								<RedirectIcon className='redirect--icon' />
							</div>
							<div className='flex mt--40 flex activity--container'>
								<div className='mt--40 ml--20 activity--icon'>{fitnessIconMapper[id]}</div>
								<div className='flex flex--column ml--15'>
									<p className='text--neon-green font-size--34 activity--name'>{name}</p>
									<p className='text--grey-light font-size--20 mt--20 activity--date'>
										Total Calories Burned on {formatDate(date)}
									</p>
									<p className='font-size--50 mt--10 calories--text'>{calories_burned} / 1000</p>
									<ProgressBar
										className='progress-bar--container'
										height='10px'
										completed={calories_burned}
										bgColor='#edff64'
										isLabelVisible={false}
										baseBgColor='#fffffe'
										labelColor='#ffffff'
										maxCompleted={1000}
										margin='20px 0px'
										animateOnRender
									/>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default FitnessActivity;
