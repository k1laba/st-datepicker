import { r as registerInstance, h } from './core-48ee0764.js';
import { m as moment } from './moment-5e7e00c2.js';

const ITEM_HEIGHT = 55;
const StDatePartSelector = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.show = false;
    }
    render() {
        return (h("div", { class: `select-wrapper ${this.mode}` }, this.show && h("div", { class: "select", style: this.getHeightStyle(ITEM_HEIGHT * 5) }, this.dataSource.map((item) => h("span", { class: "option", style: this.getHeightStyle(ITEM_HEIGHT), onClick: () => this.setValue(item) }, item.name)))));
    }
    setValue(item) {
        const mode = this.mode === 'd' ? 'date' : this.mode === 'm' ? 'month' : 'year';
        const newDate = moment(this.date).set(mode, item.value).clone().toDate();
        this.onDateChange(newDate);
    }
    getHeightStyle(value) {
        return { 'height': value + 'px' };
    }
    static get style() { return "st-date-part-selector .select-wrapper {\n  position: absolute;\n  width: 33.33%;\n  z-index: 1000;\n  left: 0;\n}\nst-date-part-selector .select-wrapper.m {\n  left: 33.3333333333%;\n}\nst-date-part-selector .select-wrapper.y {\n  left: 66.6666666667%;\n}\nst-date-part-selector .select-wrapper .select {\n  list-style: none;\n  color: #ffffff;\n  padding: 0;\n  margin: 0;\n  font-size: 20px;\n  overflow: scroll;\n  -ms-overflow-style: none;\n}\nst-date-part-selector .select-wrapper .select::-webkit-scrollbar {\n  display: none;\n}\nst-date-part-selector .select-wrapper .select .option {\n  background-blend-mode: multiply, normal;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(255, 255, 255, 0.5))), -webkit-gradient(linear, left top, left bottom, from(#424848), to(#424848));\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(to bottom, #424848, #424848);\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  padding-left: 16px;\n  cursor: pointer;\n}\nst-date-part-selector .select-wrapper .select .option:hover {\n  background-color: #777;\n  background-image: none;\n}"; }
};

export { StDatePartSelector as st_date_part_selector };
