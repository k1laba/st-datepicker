import { Component, Prop, h } from "@stencil/core";
import moment from "moment";

@Component({
    tag: 'st-daterangepicker-header',
    styleUrl: 'st-daterangepicker-header.scss'
})
export class StRangeDatePickerHeader {
    @Prop() dateStart?: Date;
    @Prop() dateEnd?: Date;

    render() {
        return (<div class="st-datepicker-range-header">
            <div class="st-datepicker-range-header__item">
                {this.dateStart && <span>{moment(this.dateStart).format('DD MMM YYYY')}</span>}
            </div>
            <st-forward-icon class="st-datepicker-range-header__item--forward"></st-forward-icon>
            <div class="st-datepicker-range-header__item">
                {this.dateEnd && <span>{moment(this.dateEnd).format('DD MMM YYYY')}</span>}
            </div>
        </div>);
    }
}