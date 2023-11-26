import {Card, FormControl, FormLabel, Input} from '@mui/joy';
import {type TMyinput} from '../../types/types';
import {useDispatch} from 'react-redux';
import {changeChargeData} from '../../feature/calcReducer';

export default function MyInput({name, label, inpValue, unit}: TMyinput) {
	const dispatch = useDispatch();
	const inputRegex = /`|-|~|!|@|#|\$|%|\^|&|\*|\(|\)|\+|=|\[|\{|\]|\}|\||\\|'|<|,|>|\?|\/|""|;|:|[a-zA-Z]|\s+$/;
	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const {value} = e.target;
		if (inputRegex.exec(value)) {
			dispatch(changeChargeData({value: inpValue, name}));
			return;
		}

		if (name === 'endLvl' || name === 'startLvl') {
			if (parseFloat(value) < 0 || parseFloat(value) > 100) {
				dispatch(changeChargeData({value: inpValue, name}));
				return;
			}
		}

		dispatch(changeChargeData({value, name}));
	}

	return (
		<Card size='lg' variant='outlined'>
			<FormControl>
				<FormLabel>
					{label}
				</FormLabel>
				<Input
					onChange={handleChange}
					value={inpValue}
					type='text'
					color='inputPrime'
					variant='outlined'
					endDecorator={<span>{unit}</span>}/>
			</FormControl>

		</Card>
	);
}
