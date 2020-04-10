import { Component, h, State, Prop, Method, EventEmitter, Event } from '@stencil/core';
import { IDatePickerModel } from '../../models/date-picker.model';
import { DateHelper } from '../../utils/date.helper';
import moment from 'moment';

@Component({
    tag: 'st-daterangepicker',
    styleUrl: 'st-daterangepicker.scss',
    shadow: false
})
export class StRangeDatePicker {
    @Prop() dateStart?: Date | number;
    @Prop() dateEnd?: Date | number;
    @Prop() open: boolean;
    @Prop() cancelLabel?: string
    @Prop() okLabel?: string;
    @Prop() locale?: string;
    @Prop() onDateChange: (start: Date, end: Date) => void;
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
    public async getDateRange(): Promise<any> {
        return await Promise.resolve({ start: this.dateStart, end: this.dateEnd });
    }

    render() {
        return [<st-datepicker-topnav
            date={this.initialDate}
            renderDate={() => this.renderDate()}
            toggleView={() => this.toggleView()}></st-datepicker-topnav>,
        this.showContent && <div class="st-datepicker-content">
            <st-daterangepicker-header
                dateStart={this.dateStart as Date}
                dateEnd={this.dateEnd as Date}>
            </st-daterangepicker-header>
            <st-datepicker-inner
                datepickerDates={this.datepickerDates}
                resolveDayView={(d: IDatePickerModel) => this.resolveDayView(d)}
                currentMonth={this.currentMonth}
                onDateSelect={(date: Date) => this.handleDateSelect(date)}
                onMonthChange={(date: Date) => this.getDays(date)}>
            </st-datepicker-inner>
            <st-datepicker-footer
                cancelLabel={this.cancelLabel}
                okLabel={this.okLabel}
                onCancel={() => this.toggleView()}
                onApprove={() => this.approve()}>
            </st-datepicker-footer>
        </div>];
    }

    private renderDate(): string {
        const format: string = 'DD MMM YYYY';
        const from: string = this.dateStart ? moment(this.dateStart).format(format) : '';
        const to: string = this.dateEnd ? moment(this.dateEnd).format(format) : '';
        return `${from} - ${to}`;
    }

    private resolveDayView(d: IDatePickerModel) {
        const isStart: boolean = d.isCurrentMonth && DateHelper.areDatesEqual(d.date, this.dateStart as Date);
        const isEnd: boolean = d.isCurrentMonth && DateHelper.areDatesEqual(d.date, this.dateEnd as Date);
        const isInRange: boolean = d.isCurrentMonth && d.text && DateHelper.isInRange(d.date, this.dateStart as Date, this.dateEnd as Date);
        const classPrefix: string = 'st-datepicker-inner__dates--';
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
        if (d.isCurrentMonth && d.text && DateHelper.areDatesEqual(d.date, new Date())) {
            childClassName += ` ${classPrefix}today`;
        }
        return (<span class={classPrefix + parentClassName}>
            <span class={classPrefix + childClassName}>{d.isCurrentMonth && d.text}</span>
        </span>);
    }

    private init() {
        DateHelper.setLocale(this.locale);
        this.showContent = this.open;
        this.initialDate = new Date(this.dateStart || new Date());
        this.dateStart = this.initialDate;
        this.dateEnd = new Date(this.dateEnd || DateHelper.getNextDay(this.dateStart, 'd'));
        this.currentMonth = this.dateEnd as Date;
    }

    private handleDateSelect(date: Date): void {
        this.setDateRange(date);
        this.currentMonth = date;
        this.getDays(this.currentMonth);
    }

    private setDateRange(date: Date): void {
        if (DateHelper.areDatesEqual(this.dateStart as Date, date)) {
            this.dateStart = null;
            return;
        }
        if (DateHelper.areDatesEqual(this.dateEnd as Date, date)) {
            this.dateEnd = null;
            return;
        }
        if (!this.dateStart || date < this.dateStart) {
            this.dateStart = date;
            return;
        }
        this.dateEnd = date;
    }

    private toggleView(): void {
        this.showContent = !this.showContent;
    }

    private approve(): void {
        if (this.dateStart && this.dateEnd) {
            this.getDays(this.currentMonth);
            this.dateChanged.emit({ start: this.dateStart, end: this.dateEnd });
            this.toggleView();
            if (this.onDateChange) {
                this.onDateChange(new Date(this.dateStart), new Date(this.dateEnd));
            }
        }
    }
    private getDays(date: Date): void {
        this.currentMonth = date;
        this.datepickerDates = [...DateHelper.getMonthDates(date)];
    }
}
