import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: 'st-datepicker-topnav',
    styleUrl: 'st-datepicker-topnav.scss'
})
export class StDatePickerTopnav {

    @Prop() selectedDay: Date;
    @Prop() onDateChange: (date: Date) => void;
    @Prop() toggleView: () => void;

    constructor() {
        if (!!this.onDateChange) {
            this.onDateChange.bind(this);
        }
    }

    render() {
        return [
            <div class="flex-item">
                <ion-button fill="clear" color="dark"
                onClick={() => this.toggleView()}>
                <ion-icon class="calendar-icon" name="md-calendar"></ion-icon>
            </ion-button>
            </div>,
            <st-datepicker-nav class="flex-item"
                onDateChange={this.onDateChange}
                toggleView={() => this.toggleView()}
                format="ddd DD MMMM YYYY"
                currentDate={this.selectedDay}></st-datepicker-nav>];
    }
}
