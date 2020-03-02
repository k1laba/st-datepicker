import { Component, h, Prop } from '@stencil/core';
import { DateHelper } from '../utils/date.helper';
import { IDatePickerDay } from '../models/date-picker-day.model';
import moment from 'moment';

@Component({
    tag: 'st-datepicker-inner',
    styleUrl: 'date-picker-inner.scss'
})
export class StCalendarInner {

    @Prop() currentDay: Date;
    @Prop() currentMonth: Date;
    @Prop() datepickerDates: IDatePickerDay[];
    @Prop() onMonthChange: (date:Date) => void;
    @Prop() onDateSelect: (date: Date) => void;

    render() {
        return (
            <div class="datepicker-inner">
                <div class="nav">
                    <ion-button class="arrow-button" fill="clear" color="dark"
                        onClick={() => this.onMonthChange(DateHelper.getPrevMonth(this.currentMonth))}>
                        <ion-icon name="ios-arrow-back"></ion-icon>
                    </ion-button>
                    <div class="current-month">{moment(this.currentMonth).format('MMMM YYYY')}</div>
                    <ion-button class="arrow-button"
                        onClick={() => this.onMonthChange(DateHelper.getNextMonth(this.currentMonth))}
                        fill="clear" color="dark">
                        <ion-icon name="ios-arrow-forward"></ion-icon>
                    </ion-button>
                </div>
                <div class="week-names">
                    {DateHelper.getWeekDaysNames().map(wd => <span>{wd}</span>)}
                </div>
                {DateHelper.getDaysGroupedByWeeks(this.datepickerDates).map(item =>
                    <div class="dates">
                        {item.map(d => <span onClick={() => this.onDateSelect(d.date)}
                            class={DateHelper.areDatesEqual(d.date, this.currentDay) && d.isCurrentMonth && "active"}>
                            {d.isCurrentMonth && d.text}
                        </span>)}
                    </div>)}
            </div>
        );
    }
}