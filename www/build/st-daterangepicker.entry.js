import { r as registerInstance, c as createEvent, h } from './core-48ee0764.js';
import { m as moment } from './moment-5e7e00c2.js';
import { D as DateHelper } from './date.helper-74c77313.js';

const StRangeDatePicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dateChanged = createEvent(this, "dateChanged", 7);
    }
    componentWillLoad() {
        this.init();
        this.getDays(this.currentMonth);
    }
    async getDateRange() {
        return await Promise.resolve({ start: this.dateStart, end: this.dateEnd });
    }
    render() {
        return [h("st-datepicker-topnav", { selectedDay: this.initialDate, renderDate: () => this.renderDate(), toggleView: () => this.toggleView() }),
            this.showContent && h("div", { class: "datepicker-content" }, h("st-daterangepicker-header", { dateStart: this.dateStart, dateEnd: this.dateEnd }), h("st-datepicker-inner", { datepickerDates: this.datepickerDates, resolveDayView: (d) => this.resolveDayView(d), currentMonth: this.currentMonth, onDateSelect: (date) => this.setCurrentDate(date), onMonthChange: (date) => this.getDays(date) }), h("st-datepicker-footer", { onCancel: () => this.toggleView(), onApprove: () => this.approve() }))];
    }
    renderDate() {
        const format = 'DD MMM YYYY';
        const from = this.dateStart ? moment(this.dateStart).format(format) : '';
        const to = this.dateEnd ? moment(this.dateEnd).format(format) : '';
        return `${from} - ${to}`;
    }
    resolveDayView(d) {
        const isStart = d.isCurrentMonth && DateHelper.areDatesEqual(d.date, this.dateStart);
        const isEnd = d.isCurrentMonth && DateHelper.areDatesEqual(d.date, this.dateEnd);
        const isInRange = d.isCurrentMonth && d.text && DateHelper.isInRange(d.date, this.dateStart, this.dateEnd);
        let parentClassName = '';
        let childClassName = '';
        if (isInRange) {
            childClassName = 'in-range';
        }
        if (isStart) {
            parentClassName = 'is-start';
            childClassName = 'active';
        }
        if (isInRange && isEnd) {
            parentClassName = 'is-end';
            childClassName = 'active';
        }
        if (!(this.dateStart && this.dateEnd) && (isStart || isEnd)) {
            parentClassName = '';
            childClassName = 'active';
        }
        return (h("span", { class: parentClassName }, h("span", { class: childClassName }, d.isCurrentMonth && d.text)));
    }
    init() {
        this.showContent = this.open;
        this.initialDate = this.dateStart || new Date();
        this.dateStart = this.initialDate;
        this.dateEnd = DateHelper.getNextDay(this.dateStart, 'd');
        this.currentMonth = this.dateEnd;
    }
    setCurrentDate(date) {
        if (DateHelper.areDatesEqual(this.dateStart, date)) {
            this.dateStart = null;
        }
        else if (DateHelper.areDatesEqual(this.dateEnd, date)) {
            this.dateEnd = null;
        }
        else if (!this.dateStart) {
            this.dateStart = date;
        }
        else if (!this.dateEnd) {
            this.dateEnd = date;
        }
        else {
            this.dateEnd = date;
        }
        if (this.dateStart && this.dateEnd) {
            const minDate = new Date(Math.min(this.dateStart.getTime(), this.dateEnd.getTime()));
            const maxDate = new Date(Math.max(this.dateStart.getTime(), this.dateEnd.getTime()));
            if (!DateHelper.areDatesEqual(minDate, maxDate)) {
                this.dateStart = minDate;
                this.dateEnd = maxDate;
            }
        }
        this.currentMonth = date;
        this.getDays(this.currentMonth);
    }
    toggleView() {
        this.showContent = !this.showContent;
    }
    approve() {
        if (this.dateStart && this.dateEnd) {
            this.getDays(this.currentMonth);
            this.dateChanged.emit({ start: this.dateStart, end: this.dateEnd });
            this.toggleView();
        }
    }
    getDays(date) {
        this.currentMonth = date;
        this.datepickerDates = [...DateHelper.getMonthDates(date)];
    }
    static get style() { return "\@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap\");\nst-daterangepicker {\n  max-width: 300px;\n  font-family: Source Sans Pro;\n  z-index: 1000;\n  display: inline-block;\n  background: #fff;\n  position: relative;\n}\nst-daterangepicker .datepicker-content {\n  position: absolute;\n  width: 100%;\n  background: #fff;\n}\nst-daterangepicker .datepicker-content::after {\n  content: \" \";\n  display: table;\n  clear: both;\n}"; }
};

export { StRangeDatePicker as st_daterangepicker };
