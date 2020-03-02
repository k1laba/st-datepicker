import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'st-datepicker-footer',
    styleUrl: 'date-picker-footer.scss',
    shadow: false
})
export class StCalendarFooter {

    @Prop() onCancel: () => void;
    @Prop() onApprove: () => void;

    render() {
        return (
            <div class="footer">
                <div class="button-wrapper">
                    <a onClick={() => this.onCancel()} class="btn">Cancel</a>
                    <a onClick={() => this.onApprove()} class="btn">Ok</a>
                </div>
            </div>
        );
    }
}