import { TTime } from "../types/types";

export  function getTimeToCharge(chargPower: number, battSize: number, start: number, end: number):TTime {
    let time = battSize * ((end - start) / 100) / chargPower;
    if (time < 0) {
        return {hours: 0, minutes: 0};
    }

    if (time < 1) {
        time = Math.round(time * 60);
        return {hours: 0, minutes: time};
    }

    const hours = Math.floor(time);
    if (time - hours !== 0) {
        const minutes = Math.round((time - hours) * 60);
        return {hours, minutes};
    }

    return {hours, minutes: 0};
}


export function getFinishTime(timeToCh: TTime):TTime {
    const date = new Date()
    const curHours = date.getHours();
    const curMinutes = date.getMinutes();
    let finishHours = curHours+ timeToCh.hours;
    let finishMinutes = curMinutes+timeToCh.minutes;
    if(finishMinutes>60) {
        finishMinutes -=60;
        finishHours ++;
    }
    if(finishHours> 23) {
        finishHours -=24;
    }
    return {
       hours:finishHours,
       minutes: finishMinutes,
    }
}

export  function getColor(value: number): string {
    if (value >= 0 && value <= 33) {
        return 'danger';
    }

    if (value <= 67 && value >= 34) {
        return 'warning';
    }

    if (value >= 68 && value <= 100) {
        return 'success';
    }

     return 'primary';
}

export function getTimeToStr(t:TTime, isFinish: boolean):string {
	if(isFinish) {
		if(t.hours>24) return `never.`
		return ` ${(t.hours < 10)?  `0${t.hours}` :`${t.hours}`}:${t.minutes? (t.minutes<10 ? `0${t.minutes}`: `${t.minutes}` ): '00'}`;
	}
	return ` ${t.hours? `${t.hours} ч`: ''}  ${t.minutes? `${t.minutes} м`: ''}`
}