import {Box} from '@mui/joy';
import MyInput from '../Components/MyInput/MyInput';
import EndOfChargeCard from '../Components/EndOfChargeCard/EndOfChargeCard';
import {type TInputProps, inputsAr} from '../data/inputsProps';

import Map from '../Components/Map/Map';



export default  function Landing() {


	return (
		<Box className='landing' sx={{p: '5% 10%'}}>
			<EndOfChargeCard/>
			<Box className='inputs'>
				{inputsAr.map((inputProp: TInputProps) => (
					<MyInput
						key={inputProp.name}
						{...inputProp} />
					 ))}
			</Box>
			<Map />
		</Box>
	);
}

