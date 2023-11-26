import {Sheet, Stack} from '@mui/joy';
import logo from '../../assets/logo1.svg';
import MyMenu from './MyMenu';

export default function Navbar() {
	return (
		<Sheet
			sx={{
				width: '100vw',
				p: '3% 5%',
			}}>
			<Stack
				direction='row'
				justifyContent='space-between'
				alignItems='center'
			>
				<img
					src={logo}
					alt='logo'
					width='200px'
					height='50px'/>
				<MyMenu/>
			</Stack>
		</Sheet>
	);
}
