import { r as registerInstance, h } from './core-48ee0764.js';

const StDatePickerTopnav = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        if (!!this.onDateChange) {
            this.onDateChange.bind(this);
        }
        if (!!this.renderDate) {
            this.renderDate.bind(this);
        }
    }
    render() {
        return [
            h("div", { class: "flex-item" }, h("ion-button", { fill: "clear", color: "dark", onClick: () => this.toggleView() }, h("ion-icon", { class: "calendar-icon", name: "md-calendar" }))),
            h("st-datepicker-nav", { class: "flex-item", onDateChange: this.onDateChange, toggleView: () => this.toggleView(), renderDate: this.renderDate, format: "ddd DD MMMM YYYY", currentDate: this.selectedDay })
        ];
    }
    static get style() { return "st-datepicker-topnav {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  border-bottom: 1px solid #fff;\n}\nst-datepicker-topnav ion-button {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\nst-datepicker-topnav .calendar-icon {\n  padding: 5px;\n  font-size: 24px;\n  cursor: pointer;\n}\nst-datepicker-topnav .flex-item {\n  border-bottom: 4px solid #424848;\n}\nst-datepicker-topnav .flex-item:first-child {\n  margin-right: 1px;\n}\nst-datepicker-topnav .flex-item:last-child {\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n}"; }
};

export { StDatePickerTopnav as st_datepicker_topnav };
