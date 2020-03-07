import { Component, h, Prop } from '@stencil/core';
import { DateHelper } from '../../../utils/date.helper';
import { IDatePickerModel } from '../../../models/date-picker.model';

@Component({
    tag: 'st-datepicker-inner',
    styleUrl: 'st-datepicker-inner.scss'
})
export class StDatePickerInner {

    @Prop() currentMonth: Date;
    @Prop() datepickerDates: IDatePickerModel[];
    @Prop() onMonthChange: (date: Date) => void;
    @Prop() onDateSelect: (date: Date) => void;
    @Prop() resolveDayView: (date: IDatePickerModel) => string;

    render() {
        return (
            <div class="datepicker-inner">
                <st-datepicker-nav
                    onDateChange={(date) => this.onMonthChange(date)}
                    format="MMMM YYYY"
                    navStep="M"
                    currentDate={this.currentMonth}>
                </st-datepicker-nav>
                <div class="week-names">
                    {DateHelper.getWeekDaysNames().map(wd => <span>{wd}</span>)}
                </div>
                {DateHelper.getDaysGroupedByWeeks(this.datepickerDates).map(item =>
                    <div class="dates">
                        {item.map(d => <span onClick={() => this.onDateSelect(d.date)}>
                            {this.resolveDayView(d)}
                        </span>)}
                    </div>)}
            </div>
        );
    }
}