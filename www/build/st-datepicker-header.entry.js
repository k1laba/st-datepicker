import { r as registerInstance, h } from './core-48ee0764.js';
import { m as moment } from './moment-5e7e00c2.js';
import { D as DateHelper } from './date.helper-74c77313.js';

const StDatePickerHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        this.toggleEditModes(-1);
    }
    render() {
        return [h("div", { class: "header" }, h("div", { class: "item day", onClick: () => this.toggleEditModes(0) }, h("div", { class: "inner-container" }, h("span", null, this.currentDay.getDate()), h("ion-icon", { name: "ios-arrow-down" }))), h("div", { class: "item month", onClick: () => this.toggleEditModes(1) }, h("div", { class: "inner-container" }, h("span", null, moment(this.currentDay).format('MMM')), h("ion-icon", { name: "ios-arrow-down" }))), h("div", { class: "item year", onClick: () => this.toggleEditModes(2) }, h("div", { class: "inner-container" }, h("span", null, this.currentDay.getFullYear()), h("ion-icon", { name: "ios-arrow-down" })))),
            h("div", null, h("st-date-part-selector", { mode: "d", onDateChange: (date) => this.handleDateChange(date), dataSource: DateHelper.getDaysDataSource(this.currentDay), date: this.currentDay, show: this.editModeFlags[0] }), h("st-date-part-selector", { mode: "m", onDateChange: (date) => this.handleDateChange(date), dataSource: DateHelper.getMonthDataSource(), date: this.currentDay, show: this.editModeFlags[1] }), h("st-date-part-selector", { mode: "y", onDateChange: (date) => this.handleDateChange(date), dataSource: DateHelper.getYearDataSource(), date: this.currentDay, show: this.editModeFlags[2] }))];
    }
    handleDateChange(date) {
        this.toggleEditModes(-1);
        this.onDateChange(date);
    }
    toggleEditModes(index) {
        this.editModeFlags = [...Array.from(Array(3).keys())
                .map((item) => item === index ? !this.editModeFlags[index] : false)];
    }
    static get style() { return "st-datepicker-header .header {\n  height: 55px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n  -ms-flex-align: center;\n  align-items: center;\n  font-size: 18px;\n  line-height: 0.47;\n  letter-spacing: normal;\n  text-align: center;\n  color: #ffffff;\n  background-blend-mode: multiply, normal;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(255, 255, 255, 0.5))), -webkit-gradient(linear, left top, left bottom, from(#424848), to(#424848));\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(to bottom, #424848, #424848);\n}\nst-datepicker-header .header .item {\n  width: 33.33%;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\nst-datepicker-header .header .item:not(:last-child) {\n  border-right: 1px solid black;\n}\nst-datepicker-header .header .item .inner-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 90%;\n  cursor: pointer;\n}\nst-datepicker-header .header .day {\n  font-size: 32px;\n}\nst-datepicker-header .header ion-icon {\n  font-size: 14px;\n  opacity: 0.54;\n}"; }
};

export { StDatePickerHeader as st_datepicker_header };
