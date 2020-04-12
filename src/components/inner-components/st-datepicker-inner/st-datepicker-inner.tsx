import { Component, h, Prop } from '@stencil/core';
import { DateHelper } from '../../../utils/date.helper';
import { IDatePickerModel } from '../../../models/date-picker.model';

@Component({
    tag: 'st-datepicker-inner',
    styleUrl: 'st-datepicker-inner.scss'
})
export class StDatePickerInner {

    @Prop() itemSize: number;
    @Prop() currentMonth: Date;
    @Prop() datepickerDates: IDatePickerModel[];
    @Prop() onMonthChange: (date: Date) => void;
    @Prop() onDateSelect: (date: Date) => void;
    @Prop() resolveDayView: (date: IDatePickerModel) => string;

    render() {
        return (
            <div class="st-datepicker-inner">
                <st-datepicker-nav
                    onDateChange={(date) => this.onMonthChange(date)}
                    format="MMMM YYYY"
                    navStep="M"
                    currentDate={this.currentMonth}>
                </st-datepicker-nav>
                <div class="st-datepicker-inner__weeks">
                    {DateHelper.getWeekDaysNames().map(wd =>
                        <span class="st-datepicker-inner__dates__item"
                            style={this.getItemStyles()}>{wd}</span>)}
                </div>
                {DateHelper.getDaysGroupedByWeeks(this.datepickerDates).map(item =>
                    <div class="st-datepicker-inner__dates">
                        {item.map(d => <span class="st-datepicker-inner__dates__item" 
                        style={this.getItemStyles()}
                        onClick={() => this.onDateSelect(d.date)}>
                            {this.resolveDayView(d)}
                        </span>)}
                    </div>)}
            </div>
        );
    }

    private getItemStyles() {
        return {
            width: `${this.itemSize}px`,
            height: `${this.itemSize}px`,
        }
    }
}