import { Component, h, Prop } from "@stencil/core";
import { DateHelper } from "../../../utils/date.helper";
import moment from "moment";

@Component({
    tag: 'st-datepicker-nav',
    styleUrl: 'st-datepicker-nav.scss'
})
export class StDatePickerNav {

    @Prop() currentDate: Date;
    @Prop() format: string;
    @Prop() navStep: string = 'd';
    @Prop() onDateChange: (date: Date) => void;
    @Prop() toggleView: () => void;
    @Prop() renderDate: () => void;

    render() {
        return (
            <div class="st-datepicker-nav">
                {!!this.onDateChange && <st-back-icon class="st-datepicker-nav__arrow-button"
                    onClick={() => this.onDateChange(DateHelper.getPrevDay(this.currentDate, this.navStep))}></st-back-icon>}
                <div onClick={() => this.toggleView && this.toggleView()}
                    class="st-datepicker-nav__current">{this.renderDate ? this.renderDate() : moment(this.currentDate).format(this.format)}
                </div>
                {!!this.onDateChange && <st-forward-icon class="st-datepicker-nav__arrow-button"
                    onClick={() => this.onDateChange(DateHelper.getNextDay(this.currentDate, this.navStep))}></st-forward-icon>}
            </div>
        );
    }
}