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
            <div class="st-footer">
                <div>
                    <a onClick={() => this.onCancel()} class="st-footer__btn">Cancel</a>
                    <a onClick={() => this.onApprove()} class="st-footer__btn">Ok</a>
                </div>
            </div>
        );
    }
}