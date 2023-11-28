export const inputsAr: TInputProps[] = [{
	label: 'Мощность зарядки',
	name: 'chargPower',
	unit: 'кВт',
}, {
	label: 'Размер батареи',
	name: 'battSize',
	unit: 'кВт*ч',
}, {
	label: 'Начальный уровень заряда батареи',
	name: 'startLvl',
	unit: '%',
}, {
	label: 'Желаемый уровень заряда батареи',
	name: 'endLvl',
	unit: '%',
}];

export type TInputProps = {
	label: string;
	name: string;
	unit: string;
};
