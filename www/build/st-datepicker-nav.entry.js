import { r as registerInstance, h } from './core-48ee0764.js';
import { m as moment } from './moment-5e7e00c2.js';
import { D as DateHelper } from './date.helper-74c77313.js';

const StDatePickerNav = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.navStep = 'd';
    }
    render() {
        return (h("div", { class: "nav" }, !!this.onDateChange && h("ion-button", { class: "arrow-button", fill: "clear", color: "dark", onClick: () => this.onDateChange(DateHelper.getPrevDay(this.currentDate, this.navStep)) }, h("ion-icon", { name: "ios-arrow-back" })), h("div", { onClick: () => this.toggleView && this.toggleView(), class: "current-date" }, this.renderDate ? this.renderDate() : moment(this.currentDate).format(this.format)), !!this.onDateChange && h("ion-button", { class: "arrow-button", onClick: () => this.onDateChange(DateHelper.getNextDay(this.currentDate, this.navStep)), fill: "clear", color: "dark" }, h("ion-icon", { name: "ios-arrow-forward" }))));
    }
    static get style() { return "st-datepicker-nav {\n  width: 300px;\n  cursor: pointer;\n}\nst-datepicker-nav .nav {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n}\nst-datepicker-nav .nav .arrow-button {\n  opacity: 0.5;\n  padding: 5px 15px;\n}\nst-datepicker-nav .nav .current-date {\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  font-size: 14px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.87);\n  -ms-flex-align: center;\n  align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n}"; }
};

export { StDatePickerNav as st_datepicker_nav };
