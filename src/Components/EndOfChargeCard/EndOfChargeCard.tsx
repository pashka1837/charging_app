
/* eslint-disable no-mixed-spaces-and-tabs */
import {Box, Card, CardContent, CircularProgress, type ColorPaletteProp, Typography} from '@mui/joy';
import {useSelector} from 'react-redux';
import {type RootState} from '../../store';
import {useCountUp} from 'use-count-up';
import {useEffect} from 'react';

export default function EndOfChargeCard() {
	const state = useSelector((store: RootState) => (store.dataInfo));

	const start = parseFloat(state.startLvl.inpValue) || 0;
	const end = parseFloat(state.endLvl.inpValue) || 0;
	const chargPower = parseFloat(state.chargPower.inpValue) || 1;
	const battSize = parseFloat(state.battSize.inpValue) || 0;
	const color = getColor(end);

	function timeToCharge(chargPower: number, battSize: number, start: number, end: number) {
		let time = battSize * ((end - start) / 100) / chargPower;
		if (time < 0) {
			return '0 часов';
		}

		if (time < 1) {
			time = Math.round(time * 60);
			return `${time} минут`;
		}

		const hours = Math.floor(time);
		if (time - hours !== 0) {
			const hours = Math.floor(time);
			const minutes = Math.round((time - hours) * 60);
			return `${hours}ч ${minutes}м`;
		}

		return `${hours} часов`;
	}

	function getColor(value: number): string {
		if (value >= 0 && value <= 33) {
			return 'circProgBad';
		}

		if (value <= 67 && value >= 34) {
			return 'circProgNrml';
		}

		if (value >= 68 && value <= 100) {
			return 'circProgGood';
		}

		 return 'primary';
	}

	const {value, reset} = useCountUp({
		isCounting: true,
		duration: 1,
		start,
		end,
	});

	useEffect(() => {
		reset();
	}, [start, end]);

	return (
		<Box className='result'
			sx={{py: '5%'}}>
			<Card
				size='lg'
				variant='soft'
				sx={{backgroundColor: '#FFD700'}}
			>
				<CardContent orientation='horizontal'>
					<CircularProgress
						determinate
						value={value as number}
						size='lg'
						color={color as ColorPaletteProp}
						variant='solid'
					>
						<Typography>{end}%</Typography>
					 </CircularProgress>
					<CardContent
						sx={{textAlign: 'start'}}>
						<Typography level='title-md'>Время на зарядку:</Typography>
						<Typography level='h3'>{timeToCharge(chargPower, battSize, start, end)}</Typography>
					</CardContent>
				   </CardContent>

			   </Card>
		</Box>
	);
}

