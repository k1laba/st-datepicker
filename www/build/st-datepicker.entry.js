import { r as registerInstance, c as createEvent, h } from './core-48ee0764.js';
import './moment-5e7e00c2.js';
import { D as DateHelper } from './date.helper-74c77313.js';

const StSingleDatePicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dateChanged = createEvent(this, "dateChanged", 7);
    }
    componentWillLoad() {
        this.init();
        this.getDays(this.selectedDay);
    }
    async getDate() {
        return await Promise.resolve(this.selectedDay);
    }
    render() {
        return [h("st-datepicker-topnav", { selectedDay: this.selectedDay, onDateChange: (date) => this.handleTopNavigationChange(date), toggleView: () => this.toggleView() }),
            this.showContent && h("div", { class: "datepicker-content" }, h("st-datepicker-header", { currentDay: this.currentDay, onDateChange: (date) => this.setCurrentDate(date) }), h("st-datepicker-inner", { datepickerDates: this.datepickerDates, currentMonth: this.currentMonth, resolveDayView: (d) => this.resolveDayView(d), onDateSelect: (date) => this.setCurrentDate(date), onMonthChange: (date) => this.getDays(date) }), h("st-datepicker-footer", { onCancel: () => this.cancel(), onApprove: () => this.approve() }))];
    }
    resolveDayView(d) {
        const className = DateHelper.areDatesEqual(d.date, this.currentDay) && 'active';
        return h("span", { class: className }, d.isCurrentMonth && d.text);
    }
    init() {
        this.showContent = this.open;
        this.selectedDay = this.selectedDay || new Date();
        this.currentDay = this.selectedDay;
        this.currentMonth = this.selectedDay;
    }
    cancel() {
        this.setCurrentDate();
        this.toggleView();
    }
    setCurrentDate(date) {
        this.currentDay = date || this.selectedDay;
        this.getDays(this.currentDay);
    }
    handleTopNavigationChange(date) {
        this.setCurrentDate(date);
        this.approve(false);
    }
    toggleView() {
        this.showContent = !this.showContent;
    }
    approve(toggle = true) {
        this.selectedDay = this.currentDay;
        this.getDays(this.selectedDay);
        this.dateChanged.emit(this.selectedDay);
        if (toggle) {
            this.toggleView();
        }
    }
    getDays(date) {
        this.currentMonth = date;
        this.datepickerDates = [...DateHelper.getMonthDates(date)];
    }
    static get style() { return "\@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap\");\nst-datepicker {\n  max-width: 300px;\n  font-family: Source Sans Pro;\n  display: inline-block;\n  z-index: 1000;\n  background: #fff;\n  position: relative;\n}\nst-datepicker .datepicker-content {\n  position: absolute;\n  width: 100%;\n  background: #fff;\n}\nst-datepicker .datepicker-content::after {\n  content: \" \";\n  display: table;\n  clear: both;\n}"; }
};

export { StSingleDatePicker as st_datepicker };
