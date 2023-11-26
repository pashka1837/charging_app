/* eslint-disable no-mixed-spaces-and-tabs */
import {Box} from '@mui/joy';
import {useSelector} from 'react-redux';
import {type RootState} from '../store';
import {type TUnits} from '../types/types';
import MyInput from '../Components/MyInput/MyInput';
import EndOfChargeCard from '../Components/EndOfChargeCard/EndOfChargeCard';

export default function Landing() {
	const state = useSelector((store: RootState) => (store.dataInfo));
	const inpValues = Object.entries(state);

	return (
		<Box sx={{p: '5% 10%'}}>
			<EndOfChargeCard/>

			<Box className='inputs'>
				{inpValues.map((ar: [string, TUnits]) => (
					<MyInput
						key={ar[0]}
						name={ar[0]}
						{...ar[1]} />
					 ))}
			</Box>
		</Box>
	);
}
