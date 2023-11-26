
/* eslint-disable @typescript-eslint/naming-convention */

export type TUnits = {
	label: string;
	inpValue: string;
	unit: string;
};

export type TMyinput = {
	name: string;
} & TUnits;

export type TChargePayload = {
	value: string;
	name: string;
};

