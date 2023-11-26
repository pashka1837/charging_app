import {configureStore} from '@reduxjs/toolkit';
import calcReducer from './feature/calcReducer';
import userReducer from './feature/userReducer';

export const store = configureStore({
	reducer: {
		dataInfo: calcReducer,
		userInfo: userReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
