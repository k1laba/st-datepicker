import { m as moment } from './moment-5e7e00c2.js';

class DateHelper {
    static getYearDataSource() {
        const year = new Date().getFullYear();
        return [year - 1, year, year + 1].map(item => { return { name: item.toString(), value: item }; });
    }
    static getWeekDaysNames() {
        return moment.weekdays().map((w) => w[0]);
    }
    static getMonthDataSource() {
        return moment.monthsShort().map((m, index) => { return { name: m, value: index }; });
    }
    static getDaysDataSource(date) {
        const dates = [];
        let start = moment(date).startOf('month');
        dates.push(start.clone().toDate());
        start = start.clone().add(1, 'days');
        while (start.toDate().getDate() > 1) {
            dates.push(start.clone().toDate());
            start = start.add(1, 'days');
        }
        return dates.map((date) => { return { name: date.getDate().toString(), value: date.getDate() }; });
    }
    static getMonthDates(date) {
        let mDate = moment(date);
        let sm = moment(date).startOf('month');
        let startDate = sm.day(0);
        let em = moment(date).endOf('month');
        let endDate = em.day(7);
        let dates = this.getDateRange(startDate.toDate(), endDate.toDate());
        return dates.map(x => {
            let m = moment(x);
            return {
                date: x,
                isCurrentMonth: this.isSameMonth(x, mDate.toDate()),
                text: m.format('D')
            };
        });
    }
    static getDateRange(startDate, endDate) {
        var dates = [];
        var currDate = moment(startDate).startOf('day');
        var lastDate = moment(endDate).startOf('day');
        dates.push(currDate.clone().toDate());
        while (currDate.add(1, 'days').diff(lastDate) <= 0) {
            dates.push(currDate.clone().toDate());
        }
        return dates;
    }
    static getDaysGroupedByWeeks(days) {
        const DAYS_PER_WEEK = 7;
        return [...Array(Math.ceil(days.length / DAYS_PER_WEEK)).keys()]
            .map(ind => days.slice(ind * DAYS_PER_WEEK, DAYS_PER_WEEK * (ind + 1)))
            .filter(i => i.findIndex(el => el.isCurrentMonth) > -1);
    }
    static getNextDay(date, datePart) {
        return this.getDay(1, date, datePart);
    }
    static getPrevDay(date, datePart) {
        return this.getDay(-1, date, datePart);
    }
    static getDay(interval, date, datePart) {
        return moment(date).add(interval, datePart).toDate();
    }
    static areDatesEqual(date1, date2) {
        return moment(date1).format('DDMMYYYY') === moment(date2).format('DDMMYYYY');
    }
    static isSameMonth(date1, date2) {
        return moment(date1).format('MMYYYY') === moment(date2).format('MMYYYY');
    }
    static isGreaterThenOrEqual(date1, date2) {
        return moment(date1).diff(date2) >= 0;
    }
    static isLessThenOrEqual(date1, date2) {
        return moment(date1).diff(date2) <= 0;
    }
    static isInRange(date, start, end) {
        return this.isGreaterThenOrEqual(date, start) && this.isLessThenOrEqual(date, end);
    }
}

export { DateHelper as D };
