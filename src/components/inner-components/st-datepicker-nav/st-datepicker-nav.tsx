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
            <div class="nav">
                {!!this.onDateChange && <img class="arrow-button" src="assets/back.svg"
                    onClick={() => this.onDateChange(DateHelper.getPrevDay(this.currentDate, this.navStep))} />
                }
                <div onClick={() => this.toggleView && this.toggleView()}
                    class="current-date">{this.renderDate ? this.renderDate() : moment(this.currentDate).format(this.format)}
                </div>
                {!!this.onDateChange && <img class="arrow-button"
                    onClick={() => this.onDateChange(DateHelper.getNextDay(this.currentDate, this.navStep))}
                    src="assets/forward.svg"/>}
            </div>
        );
    }
}