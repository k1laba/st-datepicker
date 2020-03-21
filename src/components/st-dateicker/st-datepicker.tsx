import { Component, h, State, Prop, Method, EventEmitter, Event } from '@stencil/core';
import { DateHelper } from '../../utils/date.helper';
import { IDatePickerModel } from '../../models/date-picker.model';

@Component({
    tag: 'st-datepicker',
    styleUrl: 'st-datepicker.scss',
    shadow: false
})
export class StSingleDatePicker {

    @Prop() date: Date;
    @Prop() open: boolean;
    @Prop() from?: number;
    @Prop() to?: number;
    @State() currentDay: Date;
    @State() currentMonth: Date;
    @State() showContent: boolean;
    @State() datepickerDates: IDatePickerModel[];
    @Event() dateChanged: EventEmitter;

    componentWillLoad() {
        this.init();
        this.getDays(this.date);
    }

    @Method()
    public async getDate(): Promise<Date> {
        return await Promise.resolve(this.date);
    }

    render() {
        return [<st-datepicker-topnav
            date={this.date}
            onDateChange={(date: Date) => this.handleTopNavigationChange(date)}
            toggleView={() => this.toggleView()}></st-datepicker-topnav>,
        this.showContent && <div class="st-datepicker-content">
            <st-datepicker-header
                currentDay={this.currentDay}
                yearFrom={this.from}
                yearTo={this.to}
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
        const className: string = DateHelper.areDatesEqual(d.date, this.currentDay) && 'st-datepicker-inner__dates--active';
        return <span class={className}>{d.isCurrentMonth && d.text}</span>;
    }

    private init() {
        this.showContent = this.open;
        this.date = this.date || new Date();
        this.currentDay = this.date;
        this.currentMonth = this.date;
    }

    private cancel(): void {
        this.setCurrentDate();
        this.toggleView();
    }
    private setCurrentDate(date?: Date) {
        this.currentDay = date || this.date;
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
        this.date = this.currentDay;
        this.getDays(this.date);
        this.dateChanged.emit(this.date);
        if (toggle) {
            this.toggleView();
        }
    }
    private getDays(date: Date): void {
        this.currentMonth = date;
        this.datepickerDates = [...DateHelper.getMonthDates(date)];
    }
}