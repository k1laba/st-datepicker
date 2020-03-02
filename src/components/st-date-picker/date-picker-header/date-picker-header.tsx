import { Component, h, State, Prop } from "@stencil/core";
import { DateHelper } from "../utils/date.helper";
import moment from "moment";

@Component({
    tag: 'st-datepicker-header',
    styleUrl: 'date-picker-header.scss'
})
export class StCalendarHeader {

    @Prop() currentDay: Date;
    @Prop() onDateChange: (date: Date) => void;
    @State() isDayEditMode: boolean;
    @State() isMonthEditMode: boolean;
    @State() isYearEditMode: boolean;

    render() {
        return [<div class="header">
            <div class="item day" onClick={() => this.isDayEditMode = !this.isDayEditMode}>
                <div class="inner-container">
                    <span>{this.currentDay.getDate()}</span>
                    <ion-icon name="ios-arrow-down"></ion-icon>
                </div>
            </div>
            <div class="item month" onClick={() => this.isMonthEditMode = !this.isMonthEditMode}>
                <div class="inner-container">
                    <span>{moment(this.currentDay).format('MMM')}</span>
                    <ion-icon name="ios-arrow-down"></ion-icon>
                </div>
            </div>
            <div class="item year" onClick={() => this.isYearEditMode = !this.isYearEditMode}>
                <div class="inner-container">
                    <span>{this.currentDay.getFullYear()}</span>
                    <ion-icon name="ios-arrow-down"></ion-icon>
                </div>
            </div>
        </div>,
        <div class="relative">
            {<st-date-part-selector
                mode="d"
                onDateChange={(date) => this.handleDateChange(date)}
                dataSource={DateHelper.getDaysDataSource(this.currentDay)}
                date={this.currentDay}
                show={this.isDayEditMode}>
            </st-date-part-selector>}
            {<st-date-part-selector
                mode="m"
                onDateChange={(date) => this.handleDateChange(date)}
                dataSource={DateHelper.getMonthDataSource()}
                date={this.currentDay}
                show={this.isMonthEditMode}>
            </st-date-part-selector>}
            {<st-date-part-selector
                mode="y"
                onDateChange={(date) => this.handleDateChange(date)}
                dataSource={DateHelper.getYearDataSource()}
                date={this.currentDay}
                show={this.isYearEditMode}>
            </st-date-part-selector>}
        </div>];
    }

    private handleDateChange(date: Date): void {
        this.isDayEditMode = false;
        this.isMonthEditMode = false;
        this.isYearEditMode = false;
        this.onDateChange(date);
    }
}