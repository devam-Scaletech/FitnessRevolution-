import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper';
import ProgressBar from '@ramonak/react-progress-bar';
import { HumanWalkIcon } from 'shared/components/icons/icons';

const FitnessActivity = () => {
	return (
		<div>
			<Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className='mySwiper'>
				<SwiperSlide>
					<div className='flex mt--40 flex'>
						<div className='mt--40'>
							<HumanWalkIcon />
						</div>
						<div className='flex flex--column'>
							<p className='text--neon-green font-size--34'>Steps Count</p>
							<p className='font-size--50 mt--10'>7500 / 10000</p>
							<ProgressBar
								width='300px'
								height='10px'
								completed={70}
								bgColor='#edff64'
								isLabelVisible={false}
								baseBgColor='#fffffe'
								labelColor='#ffffff'
								maxCompleted={100}
								margin='20px 0px'
								animateOnRender
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='flex mt--40 flex'>
						<div className='mt--40'>
							<HumanWalkIcon />
						</div>
						<div className='flex flex--column'>
							<p className='text--neon-green font-size--34'>Sleep</p>
							<p className='font-size--50 mt--10'>
								6<span className='font-size--22 mr--10 ml--10'>hr</span>
								{''} 49
								<span className='font-size--22 ml--10'>min</span>
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='flex mt--40 flex'>
						<div className='mt--40'>
							<HumanWalkIcon />
						</div>
						<div className='flex flex--column'>
							<p className='text--neon-green font-size--34'>Steps Count</p>
							<p className='font-size--50 mt--10'>7500 / 10000</p>
							<ProgressBar
								width='300px'
								height='10px'
								completed={70}
								bgColor='#edff64'
								isLabelVisible={false}
								baseBgColor='#fffffe'
								labelColor='#ffffff'
								maxCompleted={100}
								margin='20px 0px'
								animateOnRender
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='flex mt--40 flex'>
						<div className='mt--40'>
							<HumanWalkIcon />
						</div>
						<div className='flex flex--column'>
							<p className='text--neon-green font-size--34'>Steps Count</p>
							<p className='font-size--50 mt--10'>7500 / 10000</p>
							<ProgressBar
								width='300px'
								height='10px'
								completed={70}
								bgColor='#edff64'
								isLabelVisible={false}
								baseBgColor='#fffffe'
								labelColor='#ffffff'
								maxCompleted={100}
								margin='20px 0px'
								animateOnRender
							/>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default FitnessActivity;
