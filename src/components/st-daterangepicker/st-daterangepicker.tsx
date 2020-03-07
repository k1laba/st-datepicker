import { Component, h, State, Prop, Method, EventEmitter, Event } from '@stencil/core';
import { IDatePickerModel } from '../../models/date-picker.model';
import { DateHelper } from '../../utils/date.helper';

@Component({
    tag: 'st-daterangepicker',
    styleUrl: 'st-daterangepicker.scss',
    shadow: false
})
export class StRangeDatePicker {
    @Prop() dateStart?: Date;
    @Prop() dateEnd?: Date;
    @Prop() open: boolean;
    @State() currentMonth: Date;
    @State() datepickerDates: IDatePickerModel[];
    @State() showContent: boolean;
    @Event() dateChanged: EventEmitter;

    private initialDate: Date;

    componentWillLoad() {
        this.init();
        this.getDays(this.currentMonth);
    }

    @Method()
    public async getStartDate(): Promise<Date> {
        return await Promise.resolve(this.dateStart);
    }
    @Method()
    public async getEndDate(): Promise<Date> {
        return await Promise.resolve(this.dateEnd);
    }

    render() {
        return [<st-datepicker-topnav
            selectedDay={this.initialDate}
            toggleView={() => this.toggleView()}></st-datepicker-topnav>,
        this.showContent && <div class="datepicker-content">
            <st-daterangepicker-header
                dateStart={this.dateStart}
                dateEnd={this.dateEnd}>
            </st-daterangepicker-header>
            <st-datepicker-inner
                datepickerDates={this.datepickerDates}
                resolveDayView={(d: IDatePickerModel) => this.resolveDayView(d)}
                currentMonth={this.currentMonth}
                onDateSelect={(date: Date) => this.setCurrentDate(date)}
                onMonthChange={(date: Date) => this.getDays(date)}>
            </st-datepicker-inner>
            <st-datepicker-footer
                onCancel={() => this.cancel()}
                onApprove={() => this.approve()}>
            </st-datepicker-footer>
        </div>];
    }

    private resolveDayView(d: IDatePickerModel) {
        const isStart: boolean = d.isCurrentMonth && DateHelper.areDatesEqual(d.date, this.dateStart);
        const isEnd: boolean = d.isCurrentMonth && DateHelper.areDatesEqual(d.date, this.dateEnd);
        const isInRange: boolean = d.isCurrentMonth && d.text && DateHelper.isInRange(d.date, this.dateStart, this.dateEnd);
        let parentClassName: string = '';
        let childClassName: string = '';
        if (isInRange) {
            childClassName = 'in-range';
        }
        if (isStart) {
            parentClassName = 'is-start';
            childClassName = 'active';
        }
        if (isInRange && isEnd) {
            parentClassName = 'is-end';
            childClassName = 'active'
        }
        if (!(this.dateStart && this.dateEnd) && (isStart || isEnd)) {
            parentClassName = '';
            childClassName = 'active';
        }
        return (<span class={parentClassName}>
            <span class={childClassName}>{d.isCurrentMonth && d.text}</span>
        </span>);
    }

    private init() {
        this.showContent = this.open;
        this.initialDate = this.dateStart || new Date();
        this.dateStart = this.initialDate;
        this.dateEnd = DateHelper.getNextDay(this.dateStart, 'd');
        this.currentMonth = this.dateEnd;
    }

    private cancel(): void {
        this.setCurrentDate();
        this.toggleView();
    }
    private setCurrentDate(date?: Date) {
        if (DateHelper.areDatesEqual(this.dateStart, date)) {
            this.dateStart = null;
        }
        else if (DateHelper.areDatesEqual(this.dateEnd, date)) {
            this.dateEnd = null;
        }
        else if (!this.dateStart) {
            this.dateStart = date;
        }
        else if (!this.dateEnd) {
            this.dateEnd = date;
        }
        else {
            this.dateEnd = date;
        }
        if (this.dateStart && this.dateEnd) {
            const minDate = new Date(Math.min(this.dateStart.getTime(), this.dateEnd.getTime()));
            const maxDate = new Date(Math.max(this.dateStart.getTime(), this.dateEnd.getTime()));
            if (!DateHelper.areDatesEqual(minDate, maxDate)) {
                this.dateStart = minDate;
                this.dateEnd = maxDate;
            }
        }
        this.currentMonth = date;
        this.getDays(this.currentMonth);
    }

    private toggleView(): void {
        this.showContent = !this.showContent;
    }

    private approve(toggleView: boolean = true): void {
        if (this.dateStart && this.dateEnd) {
            this.getDays(this.currentMonth);
            this.dateChanged.emit({ start: this.dateStart, end: this.dateEnd });
            if (toggleView) {
                this.toggleView();
            }
        }
    }
    private getDays(date: Date): void {
        this.currentMonth = date;
        this.datepickerDates = [...DateHelper.getMonthDates(date)];
    }
}
