import { r as registerInstance, h } from './core-48ee0764.js';
import { m as moment } from './moment-5e7e00c2.js';

const StRangeDatePickerHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "header" }, h("div", { class: "item" }, h("span", null, "Start date"), this.dateStart && h("span", null, moment(this.dateStart).format('DD MMM YYYY'))), h("ion-button", { class: "arrow-button", fill: "clear", color: "light" }, h("ion-icon", { name: "ios-arrow-forward" })), h("div", { class: "item" }, h("span", null, "End date"), this.dateEnd && h("span", null, moment(this.dateEnd).format('DD MMM YYYY')))));
    }
    static get style() { return "st-daterangepicker-header .header {\n  height: 55px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n  -ms-flex-align: center;\n  align-items: center;\n  font-size: 18px;\n  line-height: 0.47;\n  letter-spacing: normal;\n  text-align: center;\n  color: #ffffff;\n  background-blend-mode: multiply, normal;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(255, 255, 255, 0.5))), -webkit-gradient(linear, left top, left bottom, from(#424848), to(#424848));\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(to bottom, #424848, #424848);\n}\nst-daterangepicker-header .header .item {\n  width: 33.33%;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  padding: 6px 8px;\n}\nst-daterangepicker-header .header .item span:first-child {\n  font-size: 14px;\n  line-height: 1.43;\n  letter-spacing: normal;\n}\nst-daterangepicker-header .header .item span:last-child {\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(255, 255, 255, 0.7);\n}\nst-daterangepicker-header .header ion-button {\n  opacity: 0.54;\n}"; }
};

export { StRangeDatePickerHeader as st_daterangepicker_header };
