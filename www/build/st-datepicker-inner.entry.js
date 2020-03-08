import { r as registerInstance, h } from './core-48ee0764.js';
import './moment-5e7e00c2.js';
import { D as DateHelper } from './date.helper-74c77313.js';

const StDatePickerInner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "datepicker-inner" }, h("st-datepicker-nav", { onDateChange: (date) => this.onMonthChange(date), format: "MMMM YYYY", navStep: "M", currentDate: this.currentMonth }), h("div", { class: "week-names" }, DateHelper.getWeekDaysNames().map(wd => h("span", null, wd))), DateHelper.getDaysGroupedByWeeks(this.datepickerDates).map(item => h("div", { class: "dates" }, item.map(d => h("span", { onClick: () => this.onDateSelect(d.date) }, this.resolveDayView(d)))))));
    }
    static get style() { return "st-datepicker-inner .datepicker-inner .nav {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(222, 222, 222, 0.15)), to(#fff));\n  background-image: linear-gradient(rgba(222, 222, 222, 0.15), #fff);\n}\nst-datepicker-inner .datepicker-inner .week-names,\nst-datepicker-inner .datepicker-inner .dates {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-align: center;\n  align-items: center;\n}\nst-datepicker-inner .datepicker-inner .week-names span,\nst-datepicker-inner .datepicker-inner .dates span {\n  width: 40px;\n  height: 40px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: pointer;\n}\nst-datepicker-inner .datepicker-inner .week-names span.active,\nst-datepicker-inner .datepicker-inner .dates span.active {\n  background-color: #1bd4aa;\n  border-radius: 50%;\n  color: #fff;\n}\nst-datepicker-inner .datepicker-inner .week-names span.in-range,\nst-datepicker-inner .datepicker-inner .dates span.in-range {\n  background-color: #1BD4AAC0;\n  border-radius: 0;\n  color: #fff;\n}\nst-datepicker-inner .datepicker-inner .week-names span.is-start,\nst-datepicker-inner .datepicker-inner .dates span.is-start {\n  border-top-left-radius: 50%;\n  border-bottom-left-radius: 50%;\n  color: #fff;\n  background-color: #1BD4AAC0;\n}\nst-datepicker-inner .datepicker-inner .week-names span.is-end,\nst-datepicker-inner .datepicker-inner .dates span.is-end {\n  border-top-right-radius: 50%;\n  border-bottom-right-radius: 50%;\n  color: #fff;\n  background-color: #1BD4AAC0;\n}\nst-datepicker-inner .datepicker-inner .header span {\n  color: rgba(0, 0, 0, 0.38);\n}"; }
};

export { StDatePickerInner as st_datepicker_inner };
