import { Component, h, State, Prop } from "@stencil/core";
import { DateHelper } from "../../../utils/date.helper";
import moment from "moment";
import { FileHelper } from "../../../utils/file.helper";

@Component({
    tag: 'st-datepicker-header',
    styleUrl: 'st-datepicker-header.scss'
})
export class StDatePickerHeader {

    @Prop() currentDay: Date;
    @Prop() onDateChange: (date: Date) => void;
    @State() editModeFlags: boolean[];

    componentWillLoad() {
        this.toggleEditModes(-1);
    }

    render() {
        return [<div class="header">
            <div class="item day" onClick={() => this.toggleEditModes(0)}>
                <div class="inner-container">
                    <span>{this.currentDay.getDate()}</span>
                    <img src={FileHelper.getAssetUrl('down.svg')} />
                </div>
            </div>
            <div class="item month" onClick={() => this.toggleEditModes(1)}>
                <div class="inner-container">
                    <span>{moment(this.currentDay).format('MMM')}</span>
                    <img src={FileHelper.getAssetUrl('down.svg')} />
                </div>
            </div>
            <div class="item year" onClick={() => this.toggleEditModes(2)}>
                <div class="inner-container">
                    <span>{this.currentDay.getFullYear()}</span>
                    <img src={FileHelper.getAssetUrl('down.svg')} />
                </div>
            </div>
        </div>,
        <div>
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