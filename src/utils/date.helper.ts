import moment, { MomentInput, DurationInputArg2 } from 'moment';
import { IDatePickerModel } from '../models/date-picker.model';
import { IDatePartModel } from "../models/date-part.model";
import 'moment/src/locale/ka';
import 'moment/src/locale/en-gb';

export class DateHelper {

  public static setLocale(locale: string): void {
    if (locale) {
      moment.locale(locale);
    }
  }
  public static getYearDataSource(from?: number, to?: number): IDatePartModel[] {
    const defaultFrom: number = new Date().getFullYear() - 10;
    const defaultTo: number = new Date().getFullYear();
    from = from || defaultFrom;
    to = to || defaultTo;

    const range: number[] = Array.from(Array(to - from + 1).keys()).reverse().map((val) => from + val);
    return range.map(item => { return { name: item.toString(), value: item } });
  }
  public static getWeekDaysNames(): string[] {
    return moment.weekdays().map((w) => w[0] + w[1]);
  }
  public static getMonthDataSource(): IDatePartModel[] {
    return moment.monthsShort().map((m: string, index: number) => { return { name: m, value: index } });
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
    return dates.map((date: Date) => { return { name: date.getDate().toString(), value: date.getDate() } });
  }

  public static getMonthDates(date: MomentInput): Array<IDatePickerModel> {
    let mDate = moment(date);
    let sm = moment(date).startOf('month');
    let startDate = sm.day(0);
    let em = moment(date).endOf('month');
    let endDate = em.day(7);

    let dates = this.getDateRange(startDate.toDate(), endDate.toDate());
    return dates.map<IDatePickerModel>(x => {
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

  public static getDaysGroupedByWeeks(days: IDatePickerModel[]) {
    const DAYS_PER_WEEK: number = 7;
    return [...Array(Math.ceil(days.length / DAYS_PER_WEEK)).keys()]
      .map(ind => days.slice(ind * DAYS_PER_WEEK, DAYS_PER_WEEK * (ind + 1)))
      .filter(i => i.findIndex(el => el.isCurrentMonth) > -1);
  }

  public static getNextDay(date: Date, datePart: string): Date {
    return this.getDay(1, date, datePart);
  }
  public static getPrevDay(date: Date, datePart: string): Date {
    return this.getDay(-1, date, datePart);
  }
  public static getDay(interval: number, date: Date, datePart: string): Date {
    return moment(date).add(interval, datePart as DurationInputArg2).toDate();
  }

  public static areDatesEqual(date1: Date, date2: Date): boolean {
    return moment(date1).format('DDMMYYYY') === moment(date2).format('DDMMYYYY')
  }

  public static isSameMonth(date1: Date, date2: Date): boolean {
    return moment(date1).format('MMYYYY') === moment(date2).format('MMYYYY')
  }

  public static isGreaterThenOrEqual(date1: Date, date2: Date): boolean {
    return moment(date1).diff(date2) >= 0
  }

  public static isLessThenOrEqual(date1: Date, date2: Date): boolean {
    return moment(date1).diff(date2) <= 0
  }

  public static isInRange(date: Date, start: Date, end: Date) {
    return this.isGreaterThenOrEqual(date, start) && this.isLessThenOrEqual(date, end);
  }
}