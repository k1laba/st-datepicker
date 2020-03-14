import { Component, h, Prop } from "@stencil/core";
import { FileHelper } from "../../../utils/file.helper";

@Component({
    tag: 'st-datepicker-topnav',
    styleUrl: 'st-datepicker-topnav.scss'
})
export class StDatePickerTopnav {

    @Prop() date: Date;
    @Prop() onDateChange: (date: Date) => void;
    @Prop() toggleView: () => void;
    @Prop() renderDate: () => void;

    constructor() {
        if (!!this.onDateChange) {
            this.onDateChange.bind(this);
        }
        if (!!this.renderDate) {
            this.renderDate.bind(this);
        }
    }

    render() {
        return [
            <div class="flex-item">
                <img src={FileHelper.getAssetUrl('calendar.svg')} class="calendar-icon" onClick={() => this.toggleView()}/>
            </div>,
            <st-datepicker-nav class="flex-item"
                onDateChange={this.onDateChange}
                toggleView={() => this.toggleView()}
                renderDate={this.renderDate}
                format="ddd DD MMMM YYYY"
                currentDate={this.date}></st-datepicker-nav>];
    }
}
