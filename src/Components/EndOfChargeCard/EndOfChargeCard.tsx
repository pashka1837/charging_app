import {Box, Card,  type ColorPaletteProp, Typography, CircularProgress} from '@mui/joy';
import {useSelector} from 'react-redux';
import {type RootState} from '../../store';
import {useCountUp} from 'use-count-up';
import {useEffect} from 'react';
import { TTime } from '../../types/types';
import { getColor, getFinishTime, getTimeToCharge, getTimeToStr } from '../../utils/utils';

function EstimateCardTypography({time, title, isFinish}: {time: TTime, title: string, isFinish: boolean}) {
	return (
		<Box className='estimateTime'>
		<Typography level='title-md'>{title}</Typography>
		<Typography level='h4'>{getTimeToStr(time, isFinish)}</Typography>
		</Box>
	)
}


export default function EndOfChargeCard() {
	const state = useSelector((store: RootState) => (store.dataInfo));

	const start = parseFloat(state.startLvl.inpValue) || 0;
	const end = parseFloat(state.endLvl.inpValue) || 0;
	const chargPower = parseFloat(state.chargPower.inpValue) || 1;
	const battSize = parseFloat(state.battSize.inpValue) || 0;

	const color = getColor(end);
	const chargeTime= getTimeToCharge(chargPower, battSize, start, end)
	const finishTime = getFinishTime(chargeTime);


	const {value, reset} = useCountUp({
		isCounting: true,
		duration: 1,
		start,
		end,
	});

	useEffect(() => {
		reset();
	}, [end]);

	return (
			<Card
				variant='soft'
				sx={{backgroundColor: '#FFD700'}}
			>
				<Box className='estimateContainer' > 				    
						<CircularProgress
							color={color as ColorPaletteProp}
							determinate
							value={value as number}
							size='lg'
							sx={{alignSelf:'center', justifySelf:'center'}}
						>
							<Typography level='body-md'>{end}%</Typography>
					 </CircularProgress>
					
					<Box className='estimateCalcs'>
						<EstimateCardTypography time={chargeTime} title='Время на зарядку:' isFinish={false} />
						<EstimateCardTypography time={finishTime} title='Время окончания зарядки:' isFinish={true} />
					</Box>
				</Box>
			   </Card>
);
}

// function timeToCharge(chargPower: number, battSize: number, start: number, end: number) {
// 	let time = battSize * ((end - start) / 100) / chargPower;
// 	if (time < 0) {
// 		return '0 часов';
// 	}

// 	if (time < 1) {
// 		time = Math.round(time * 60);
// 		return `${time} минут`;
// 	}

// 	const hours = Math.floor(time);
// 	if (time - hours !== 0) {
// 		const minutes = Math.round((time - hours) * 60);
// 		return `${hours}ч ${minutes}м`;
// 	}

// 	return `${hours} часов`;
// }


{/* <CardContent orientation='horizontal'>
					<Box >
						<CircularProgress
							color={color as ColorPaletteProp}
							determinate
							value={value as number}
							size='lg'
						>
							<Typography>{end}%</Typography>
					 </CircularProgress>
					</Box>

					<CardContent
						sx={{textAlign: 'start'}}>
						<Typography level='title-md'>Время на зарядку:</Typography>
						<Typography level='h3'>{timeToCharge(chargPower, battSize, start, end)}</Typography>
					</CardContent>
				   </CardContent>
				   <CardContent>
					hey
				   </CardContent> */}

