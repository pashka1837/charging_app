
/* eslint-disable no-mixed-spaces-and-tabs */

import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {type TChargePayload, type TUnits} from '../types/types';

 type CounterState = {
 	chargPower: TUnits;
 	battSize: TUnits;
 	startLvl: TUnits;
 	endLvl: TUnits;
 };

const initialState: CounterState = {
	chargPower: {
		label: 'Мощность зарядки',
	   inpValue: '3.7',
	   unit: 'кВт',
	},
	battSize: {
		label: 'Размер батареи',
		inpValue: '45',
		unit: 'кВт*ч',
	 },
	startLvl: {
		label: 'Начальный уровень заряда батареи',
		inpValue: '20',
		unit: '%',
	 },
	endLvl: {
		label: 'Желаемый уровень заряда батареи',
		inpValue: '80',
		unit: '%',
	 },
};

const calc = createSlice({
	name: 'charging',
	initialState,
	reducers: {
		changeChargeData(state, action: PayloadAction<TChargePayload>) {
			const {value, name} = action.payload;
			state[name as keyof CounterState] = {...state[name as keyof CounterState], inpValue: value};
		},
	},

});

export default calc.reducer;

export const {changeChargeData} = calc.actions;
