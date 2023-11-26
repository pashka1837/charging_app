import {Dropdown, IconButton, Menu, MenuButton, MenuItem} from '@mui/joy';
import MenuIcon from '@mui/icons-material/Menu';

export default function MyMenu() {
	return (
		<Dropdown>
			<MenuButton
				slots={{root: IconButton}}
				slotProps={{root: {variant: 'plain', color: 'neutral'}}}
			>
				<MenuIcon />
			</MenuButton>
			<Menu placement='bottom-end' variant='soft' color='neutral'>
				<MenuItem>Tut poka</MenuItem>
				<MenuItem>Nihuya net</MenuItem>
				<MenuItem>(no mojet i byt`)</MenuItem>
			</Menu>
		</Dropdown>
	);
}
