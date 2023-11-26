/* eslint-disable no-mixed-spaces-and-tabs */
import {createSlice} from '@reduxjs/toolkit';
// Import type {PayloadAction} from '@reduxjs/toolkit';

function checkUserTheme(): boolean {
	const savedTheme = localStorage.getItem('isDarkTheme') === 'true';
	const isDarkTheme = savedTheme ?? window.matchMedia('(prefers-color-scheme: dark)').matches;
	document.body.classList.toggle('dark', isDarkTheme);
	localStorage.setItem('isDarkTheme', `${isDarkTheme}`);
	return isDarkTheme;
}

 type CounterState = {
 	isDark: boolean;

 };

const initialState: CounterState = {
	isDark: checkUserTheme(),

};

const user = createSlice({
	name: 'user',
	initialState,
	reducers: {

	},

});

export default user.reducer;
