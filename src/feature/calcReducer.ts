import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {type TCalcState, type TChargePayload} from '../types/types';

 type CounterState = TCalcState;

const initialState: CounterState = {
	chargPower: {
	   inpValue: '3.7',
	},
	battSize: {
		inpValue: '45',
	 },
	startLvl: {
		inpValue: '20',
	 },
	endLvl: {
		inpValue: '80',
	 },
};

const calc = createSlice({
	name: 'charging',
	initialState,
	reducers: {
		changeChargeData(state, action: PayloadAction<TChargePayload>) {
			const {value, name} = action.payload;
			state[name] = {...state[name], inpValue: value};
		},
	},

});

export default calc.reducer;

export const {changeChargeData} = calc.actions;
