import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'st-datepicker-footer',
    styleUrl: 'st-datepicker-footer.scss',
    shadow: false
})
export class StDatePickerFooter {

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