import { Component, Prop, h } from "@stencil/core";
import moment from "moment";
import { FileHelper } from "../../../utils/file.helper";

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
            <img src={FileHelper.getAssetUrl('forward.svg')}/>
            <div class="st-datepicker-range-header__item">
                {this.dateEnd && <span>{moment(this.dateEnd).format('DD MMM YYYY')}</span>}
            </div>
        </div>);
    }
}