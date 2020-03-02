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
    @State() editModeFlags: boolean[];

    render() {
        return [<div class="header">
            <div class="item day" onClick={() => this.toggleEditModes(0)}>
                <div class="inner-container">
                    <span>{this.currentDay.getDate()}</span>
                    <ion-icon name="ios-arrow-down"></ion-icon>
                </div>
            </div>
            <div class="item month" onClick={() => this.toggleEditModes(1)}>
                <div class="inner-container">
                    <span>{moment(this.currentDay).format('MMM')}</span>
                    <ion-icon name="ios-arrow-down"></ion-icon>
                </div>
            </div>
            <div class="item year" onClick={() => this.toggleEditModes(2)}>
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
                show={this.editModeFlags[0]}>
            </st-date-part-selector>}
            {<st-date-part-selector
                mode="m"
                onDateChange={(date) => this.handleDateChange(date)}
                dataSource={DateHelper.getMonthDataSource()}
                date={this.currentDay}
                show={this.editModeFlags[1]}>
            </st-date-part-selector>}
            {<st-date-part-selector
                mode="y"
                onDateChange={(date) => this.handleDateChange(date)}
                dataSource={DateHelper.getYearDataSource()}
                date={this.currentDay}
                show={this.editModeFlags[2]}>
            </st-date-part-selector>}
        </div>];
    }

    private handleDateChange(date: Date): void {
        this.toggleEditModes(-1);
        this.onDateChange(date);
    }

    private toggleEditModes(index: number) {
        this.editModeFlags = [...Array.from(Array(3).keys())
            .map((item) => item === index ? !this.editModeFlags[index] : false)];
    }
}