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
                {!!this.onDateChange && <ion-button class="arrow-button" fill="clear" color="dark"
                    onClick={() => this.onDateChange(DateHelper.getPrevDay(this.currentDate, this.navStep))}>
                    <ion-icon name="ios-arrow-back"></ion-icon>
                </ion-button>}
                <div onClick={() => this.toggleView && this.toggleView()}
                    class="current-date">{this.renderDate ? this.renderDate() : moment(this.currentDate).format(this.format)}
                </div>
                {!!this.onDateChange && <ion-button class="arrow-button"
                    onClick={() => this.onDateChange(DateHelper.getNextDay(this.currentDate, this.navStep))}
                    fill="clear" color="dark">
                    <ion-icon name="ios-arrow-forward"></ion-icon>
                </ion-button>}
            </div>
        );
    }
}