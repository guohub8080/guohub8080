import {t_intervalObj, t_intervalType} from "../../static/types";
import {IntervalError} from "../../../common/processError/errorTypes";
import {getIntervalArrWithinOctaveByIntervalNum} from "../../methods/utInterval";
import intervalMeta from "../../static/intervalMeta";

export const initIntervalClass = (intervalType: t_intervalType = "p",
                                  intervalNum: number = 1): [t_intervalObj, number] => {
	if (intervalNum <= 0) throw new IntervalError("Interval num cannot be 0 or negative!")
	const intervalNumWithinOctave = getIntervalArrWithinOctaveByIntervalNum(intervalNum)
	const findObj = intervalMeta.where("type", intervalType).where("num", intervalNumWithinOctave[1]).first()
	if (findObj) return [findObj as t_intervalObj, intervalNumWithinOctave[0] as number]
	throw new IntervalError("Interval type doesn't match interval num.(e.g. maj1)")
}