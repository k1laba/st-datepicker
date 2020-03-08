import { r as registerInstance, h } from './core-48ee0764.js';

const StDatePickerFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "footer" }, h("div", { class: "button-wrapper" }, h("a", { onClick: () => this.onCancel(), class: "btn" }, "Cancel"), h("a", { onClick: () => this.onApprove(), class: "btn" }, "Ok"))));
    }
    static get style() { return "st-datepicker-footer .footer {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\nst-datepicker-footer .footer .btn {\n  cursor: pointer;\n  padding: 3px 20px;\n  font-size: 12px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: 0.5px;\n  text-align: center;\n  color: #1bd4aa;\n  text-transform: uppercase;\n}"; }
};

export { StDatePickerFooter as st_datepicker_footer };
