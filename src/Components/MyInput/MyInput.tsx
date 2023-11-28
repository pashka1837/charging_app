import {Card, FormControl, FormLabel, Input} from '@mui/joy';
import {useDispatch, useSelector} from 'react-redux';
import {changeChargeData} from '../../feature/calcReducer';
import {type TInputProps} from '../../data/inputsProps';
import {type RootState} from '../../store';
import {inputRegex} from '../../utils/regex';

export default function MyInput({name, label, unit}: TInputProps) {
	const dispatch = useDispatch();
	const {inpValue} = useSelector((store: RootState) => (store.dataInfo[name]));

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const {value} = e.target;
		if (inputRegex.exec(value)) {
			dispatch(changeChargeData({value: inpValue, name}));
			return;
		}

		if (name === 'endLvl' || name === 'startLvl') {
			if (parseFloat(value) < 0 || parseFloat(value) > 100) {
				dispatch(changeChargeData({value:inpValue, name}));
				return;
			}
		}

		dispatch(changeChargeData({value, name}));
	}

	return (
		<Card size='lg' variant='outlined'  sx={{border: '2px solid #FFD700'}}>
			<FormControl>
				<FormLabel>
					{label}
				</FormLabel>
				<Input
				    sx={{borderColor: '#FFD700'}}
					onChange={handleChange}
					value={inpValue}
					type='text'
					inputMode='numeric'
					variant='outlined'
					endDecorator={<span>{unit}</span>}/>
			</FormControl>

		</Card>
	);
}
