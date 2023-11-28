export type TCalcState = Record<string, {
	inpValue: string;
}>;

export type TChargePayload = {
	value: string;
	name: string;
};

export type TTime = {
	hours: number;
    minutes: number;
}