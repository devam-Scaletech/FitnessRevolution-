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
	return (
		<div className='mt--65'>
			<Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]}>
				{userActivities.map((activities) => {
					const { name, calories_burned, date, id } = activities;
					return (
						<SwiperSlide key={activities.id}>
							<div className='redirect--wrapper position--absolute'>
								<RedirectIcon className='redirect--icon' />
							</div>
							<div className='flex mt--40 flex'>
								<div className='mt--40 ml--20'>{fitnessIconMapper[id]}</div>
								<div className='flex flex--column'>
									<p className='text--neon-green font-size--34'>{name}</p>
									<p className='text--grey-light font-size--20 mt--20'>
										Total Calories Burned on {formatDate(date)}
									</p>
									<p className='font-size--50 mt--10'>{calories_burned} / 1000</p>
									<ProgressBar
										width='500px'
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
