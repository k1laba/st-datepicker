import { Component, h, Prop } from '@stencil/core';
import moment, { unitOfTime } from 'moment';
import { IDatePartModel } from "../models/date-part.model";

const ITEM_HEIGHT: number = 55;

@Component({
    tag: 'st-date-part-selector',
    styleUrl: 'date-part-selector.scss'
})
export class StDatePartSelector {

    @Prop() show: boolean = false;
    @Prop() mode: string;
    @Prop() date: Date;
    @Prop() dataSource: IDatePartModel[];
    @Prop() onDateChange: (date: Date) => void;

    render() {
        return (<div class={`select-wrapper ${this.mode}`}>
            {this.show && <div class="select" style={this.getHeightStyle(ITEM_HEIGHT * 5)}>
                {this.dataSource.map((item: IDatePartModel) => <span class="option"
                    style={this.getHeightStyle(ITEM_HEIGHT)}
                    onClick={() => this.setValue(item)}>
                    {item.name}
                </span>)}
            </div>}
        </div>);
    }

    private setValue(item: IDatePartModel): void {
        const mode: unitOfTime.All = this.mode === 'd' ? 'date' : this.mode === 'm' ? 'month' : 'year';
        const newDate: Date = moment(this.date).set(mode, item.value).clone().toDate();
        this.onDateChange(newDate);
    }
    private getHeightStyle(value: number): any {
        return { 'height': value + 'px' };
    }
}