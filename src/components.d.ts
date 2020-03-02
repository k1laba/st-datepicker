/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  IDatePartModel,
} from './components/st-date-picker/models/date-part.model';
import {
  IDatePickerDay,
} from './components/st-date-picker/models/date-picker-day.model';

export namespace Components {
  interface StDatePartSelector {
    'dataSource': IDatePartModel[];
    'date': Date;
    'mode': string;
    'onDateChange': (date: Date) => void;
    'show': boolean;
  }
  interface StDatepicker {
    'getDate': () => Promise<Date>;
    'selectedDay': Date;
  }
  interface StDatepickerFooter {
    'onApprove': () => void;
    'onCancel': () => void;
  }
  interface StDatepickerHeader {
    'currentDay': Date;
    'onDateChange': (date: Date) => void;
  }
  interface StDatepickerInner {
    'currentDay': Date;
    'currentMonth': Date;
    'datepickerDates': IDatePickerDay[];
    'onDateSelect': (date: Date) => void;
    'onMonthChange': (date:Date) => void;
  }
}

declare global {


  interface HTMLStDatePartSelectorElement extends Components.StDatePartSelector, HTMLStencilElement {}
  var HTMLStDatePartSelectorElement: {
    prototype: HTMLStDatePartSelectorElement;
    new (): HTMLStDatePartSelectorElement;
  };

  interface HTMLStDatepickerElement extends Components.StDatepicker, HTMLStencilElement {}
  var HTMLStDatepickerElement: {
    prototype: HTMLStDatepickerElement;
    new (): HTMLStDatepickerElement;
  };

  interface HTMLStDatepickerFooterElement extends Components.StDatepickerFooter, HTMLStencilElement {}
  var HTMLStDatepickerFooterElement: {
    prototype: HTMLStDatepickerFooterElement;
    new (): HTMLStDatepickerFooterElement;
  };

  interface HTMLStDatepickerHeaderElement extends Components.StDatepickerHeader, HTMLStencilElement {}
  var HTMLStDatepickerHeaderElement: {
    prototype: HTMLStDatepickerHeaderElement;
    new (): HTMLStDatepickerHeaderElement;
  };

  interface HTMLStDatepickerInnerElement extends Components.StDatepickerInner, HTMLStencilElement {}
  var HTMLStDatepickerInnerElement: {
    prototype: HTMLStDatepickerInnerElement;
    new (): HTMLStDatepickerInnerElement;
  };
  interface HTMLElementTagNameMap {
    'st-date-part-selector': HTMLStDatePartSelectorElement;
    'st-datepicker': HTMLStDatepickerElement;
    'st-datepicker-footer': HTMLStDatepickerFooterElement;
    'st-datepicker-header': HTMLStDatepickerHeaderElement;
    'st-datepicker-inner': HTMLStDatepickerInnerElement;
  }
}

declare namespace LocalJSX {
  interface StDatePartSelector {
    'dataSource'?: IDatePartModel[];
    'date'?: Date;
    'mode'?: string;
    'onDateChange'?: (date: Date) => void;
    'show'?: boolean;
  }
  interface StDatepicker {
    'onDateChanged'?: (event: CustomEvent<any>) => void;
    'selectedDay'?: Date;
  }
  interface StDatepickerFooter {
    'onApprove'?: () => void;
    'onCancel'?: () => void;
  }
  interface StDatepickerHeader {
    'currentDay'?: Date;
    'onDateChange'?: (date: Date) => void;
  }
  interface StDatepickerInner {
    'currentDay'?: Date;
    'currentMonth'?: Date;
    'datepickerDates'?: IDatePickerDay[];
    'onDateSelect'?: (date: Date) => void;
    'onMonthChange'?: (date:Date) => void;
  }

  interface IntrinsicElements {
    'st-date-part-selector': StDatePartSelector;
    'st-datepicker': StDatepicker;
    'st-datepicker-footer': StDatepickerFooter;
    'st-datepicker-header': StDatepickerHeader;
    'st-datepicker-inner': StDatepickerInner;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'st-date-part-selector': LocalJSX.StDatePartSelector & JSXBase.HTMLAttributes<HTMLStDatePartSelectorElement>;
      'st-datepicker': LocalJSX.StDatepicker & JSXBase.HTMLAttributes<HTMLStDatepickerElement>;
      'st-datepicker-footer': LocalJSX.StDatepickerFooter & JSXBase.HTMLAttributes<HTMLStDatepickerFooterElement>;
      'st-datepicker-header': LocalJSX.StDatepickerHeader & JSXBase.HTMLAttributes<HTMLStDatepickerHeaderElement>;
      'st-datepicker-inner': LocalJSX.StDatepickerInner & JSXBase.HTMLAttributes<HTMLStDatepickerInnerElement>;
    }
  }
}


