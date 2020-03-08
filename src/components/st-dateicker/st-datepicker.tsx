import { Component, h, State, Prop, Method, EventEmitter, Event } from '@stencil/core';
import { DateHelper } from '../../utils/date.helper';
import { IDatePickerModel } from '../../models/date-picker.model';

@Component({
    tag: 'st-datepicker',
    styleUrl: 'st-datepicker.scss',
    shadow: false
})
export class StSingleDatePicker {

    @Prop() selectedDay: Date;
    @Prop() open: boolean;
    @State() currentDay: Date;
    @State() currentMonth: Date;
    @State() showContent: boolean;
    @State() datepickerDates: IDatePickerModel[];
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
        return [<st-datepicker-topnav
            selectedDay={this.selectedDay}
            onDateChange={(date: Date) => this.handleTopNavigationChange(date)}
            toggleView={() => this.toggleView()}></st-datepicker-topnav>,
        this.showContent && <div class="datepicker-content">
            <st-datepicker-header
                currentDay={this.currentDay}
                onDateChange={(date) => this.setCurrentDate(date)}>
            </st-datepicker-header>
            <st-datepicker-inner
                datepickerDates={this.datepickerDates}
                currentMonth={this.currentMonth}
                resolveDayView={(d: IDatePickerModel) => this.resolveDayView(d)}
                onDateSelect={(date: Date) => this.setCurrentDate(date)}
                onMonthChange={(date: Date) => this.getDays(date)}>
            </st-datepicker-inner>
            <st-datepicker-footer
                onCancel={() => this.cancel()}
                onApprove={() => this.approve()}>
            </st-datepicker-footer>
        </div>];
    }

    private resolveDayView(d: IDatePickerModel): string {
        const className: string = DateHelper.areDatesEqual(d.date, this.currentDay) && 'active';
        return <span class={className}>{d.isCurrentMonth && d.text}</span>;
    }

    private init() {
        this.showContent = this.open;
        this.selectedDay = this.selectedDay || new Date();
        this.currentDay = this.selectedDay;
        this.currentMonth = this.selectedDay;
    }

    private cancel(): void {
        this.setCurrentDate();
        this.toggleView();
    }
    private setCurrentDate(date?: Date) {
        this.currentDay = date || this.selectedDay;
        this.getDays(this.currentDay);
    }

    private handleTopNavigationChange(date: Date) {
        this.setCurrentDate(date);
        this.approve(false);
    }
    private toggleView(): void {
        this.showContent = !this.showContent;
    }

    private approve(toggle: boolean = true): void {
        this.selectedDay = this.currentDay;
        this.getDays(this.selectedDay);
        this.dateChanged.emit(this.selectedDay);
        if (toggle) {
            this.toggleView();
        }
    }
    private getDays(date: Date): void {
        this.currentMonth = date;
        this.datepickerDates = [...DateHelper.getMonthDates(date)];
    }
}