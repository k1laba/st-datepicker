import { Component, Prop, h } from "@stencil/core";
import moment from "moment";

@Component({
    tag: 'st-daterangepicker-header',
    styleUrl: 'st-daterangepicker-header.scss'
})
export class StRangeDatePickerHeader {
    @Prop() dateStart?: Date;
    @Prop() dateEnd?: Date;

    render() {
        return (<div class="header">
            <div class="item">
                <span>Start date</span>
                {this.dateStart && <span>{moment(this.dateStart).format('DD MMM YYYY')}</span>}
            </div>
            <ion-button class="arrow-button" fill="clear" color="light">
                <ion-icon name="ios-arrow-forward"></ion-icon>
            </ion-button>
            <div class="item">
                <span>End date</span>
                {this.dateEnd && <span>{moment(this.dateEnd).format('DD MMM YYYY')}</span>}
            </div>
        </div>);
    }
}