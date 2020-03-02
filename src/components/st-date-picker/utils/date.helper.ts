import moment, { MomentInput } from 'moment';
import { IDatePartModel } from "../models/date-part.model";
import { IDatePickerDay } from '../models/date-picker-day.model';

export class DateHelper {
  
  public static getYearDataSource(): IDatePartModel[] {
       const year = new Date().getFullYear();
       return [year - 1, year, year + 1].map(item => { return { name: item.toString(), value: item }});
    }
  public static getWeekDaysNames(): string[] {
    return moment.weekdays().map((w) => w[0]);
  }
  public static getMonthDataSource(): IDatePartModel[] {
    return moment.monthsShort().map((m: string, index: number) => { return { name: m, value: index }});
  }

  public static getDaysDataSource(date: Date): IDatePartModel[] {
    const dates: Date[] = [];
    let start = moment(date).startOf('month');
    dates.push(start.clone().toDate());
    start = start.clone().add(1, 'days');
    while (start.toDate().getDate() > 1) {
      dates.push(start.clone().toDate());
      start = start.add(1, 'days');
    }
    return dates.map((date: Date) => { return { name: date.getDate().toString(), value: date.getDate() }});
  }

  public static getMonthDates(date: MomentInput): Array<IDatePickerDay> {
    let mDate = moment(date);
    let sm = moment(date).startOf('month');
    let startDate = sm.day(0);
    let em = moment(date).endOf('month');
    let endDate = em.day(7);

    let dates = this.getDateRange(startDate.toDate(), endDate.toDate());
    return dates.map<IDatePickerDay>(x => {
      let m = moment(x);
      return {
        date: x,
        isCurrentMonth: this.isSameMonth(x, mDate.toDate()),
        text: m.format('D')
      }
    })
  }

  private static getDateRange(startDate: Date, endDate: Date): Array<Date> {
    var dates: Array<Date> = [];

    var currDate = moment(startDate).startOf('day');
    var lastDate = moment(endDate).startOf('day');
    dates.push(currDate.clone().toDate());

    while (currDate.add(1, 'days').diff(lastDate) <= 0) {
      dates.push(currDate.clone().toDate());
    }

    return dates;
  }

  public static getDaysGroupedByWeeks(days: IDatePickerDay[]) {
    const DAYS_PER_WEEK: number = 7;
    return [...Array(Math.ceil(days.length / DAYS_PER_WEEK)).keys()]
      .map(ind => days.slice(ind * DAYS_PER_WEEK, DAYS_PER_WEEK * (ind + 1)))
      .filter(i => i.findIndex(el => el.isCurrentMonth) > -1);
  }

  public static getDateCount(startDate: Date, endDate: Date): number {
    const startDay = moment(startDate);
    const splitDay = moment(startDate).day(7);
    const endDay = moment(endDate);

    const diffToEnd = endDay.diff(startDay, 'days');
    const diffToSunday = splitDay.diff(startDay, 'days');
    if (diffToEnd < diffToSunday) {
      return diffToEnd + 1;
    }
    return diffToSunday + 1;
  }

  public static getNextMonth(date: Date): Date {
    return moment(date).add(1, 'M').toDate();
  }
  public static getPrevMonth(date: Date): Date {
    return moment(date).add(-1, 'M').toDate();
  }

  public static areDatesEqual(date1: Date, date2: Date): boolean {
    return moment(date1).format('DDMMYYYY') === moment(date2).format('DDMMYYYY')
  }

  public static isSameMonth(date1: Date, date2: Date): boolean {
    return moment(date1).format('MMYYYY') === moment(date2).format('MMYYYY')
  }
}