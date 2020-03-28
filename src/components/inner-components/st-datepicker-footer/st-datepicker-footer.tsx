import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'st-datepicker-footer',
    styleUrl: 'st-datepicker-footer.scss',
    shadow: false
})
export class StDatePickerFooter {

    @Prop() onCancel: () => void;
    @Prop() onApprove: () => void;
    @Prop() cancelLabel?: string
    @Prop() okLabel?: string;

    render() {
        return (
            <div class="st-footer">
                <div>
        <a onClick={() => this.onCancel()} class="st-footer__btn">{this.cancelLabel || "Cancel"}</a>
                    <a onClick={() => this.onApprove()} class="st-footer__btn">{this.okLabel || "Ok"}</a>
                </div>
            </div>
        );
    }
}