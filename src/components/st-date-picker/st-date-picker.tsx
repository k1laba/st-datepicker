import { Component, h, State, Prop, Method, EventEmitter, Event } from '@stencil/core';
import { DateHelper } from './utils/date.helper';
import { IDatePickerDay } from './models/date-picker-day.model';

@Component({
    tag: 'st-datepicker',
    styleUrl: 'st-date-picker.scss',
    shadow: false
})
export class StCalendar {

    @Prop() selectedDay: Date;
    @State() currentDay: Date;
    @State() currentMonth: Date;
    @State() datepickerDates: IDatePickerDay[];
    @Event() dateChanged: EventEmitter;

    componentWillLoad() {
        this.init();
        this.getDays(this.selectedDay);
    }

    @Method()
    public async getDate(): Promise<Date> {
        return await Promise.resolve(this.selectedDay);
    }

    render() {
        return [<st-datepicker-header
            currentDay={this.currentDay}
            onDateChange={(date) => this.setCurrentDate(date)}>
        </st-datepicker-header>,
        <st-datepicker-inner
            datepickerDates={this.datepickerDates}
            currentDay={this.currentDay}
            currentMonth={this.currentMonth}
            onDateSelect={(date: Date) => this.setCurrentDate(date)}
            onMonthChange={(date: Date) => this.getDays(date)}>
        </st-datepicker-inner>,
        <st-datepicker-footer
            onCancel={() => this.cancel()}
            onApprove={() => this.approve()}>
        </st-datepicker-footer>];
    }

    private init() {
        this.selectedDay = this.selectedDay || new Date();
        this.currentDay = this.selectedDay;
        this.currentMonth = this.selectedDay;
    }

    private cancel(): void {
        this.setCurrentDate();
    }
    private setCurrentDate(date?: Date) {
        this.currentDay = date || this.selectedDay;
        this.getDays(this.currentDay);
    }

    private approve(): void {
        this.selectedDay = this.currentDay;
        this.getDays(this.selectedDay);
        this.dateChanged.emit(this.selectedDay);
    }
    private getDays(date: Date): void {
        this.currentMonth = date;
        this.datepickerDates = [...DateHelper.getMonthDates(date)];
    }
}