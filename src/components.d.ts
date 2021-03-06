/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  IDatePartModel,
} from './models/date-part.model';
import {
  IDatePickerModel,
} from './models/date-picker.model';

export namespace Components {
  interface StBackIcon {}
  interface StCalendarIcon {}
  interface StDatePartSelector {
    'dataSource': IDatePartModel[];
    'date': Date;
    'mode': string;
    'onDateChange': (date: Date) => void;
    'show': boolean;
  }
  interface StDatepicker {
    'cancelLabel'?: string;
    'date': Date | number;
    'from'?: number;
    'getDate': () => Promise<Date>;
    'locale'?: string;
    'okLabel'?: string;
    'onDateChange': (date: Date) => void;
    'open': boolean;
    'to'?: number;
    'width': number;
  }
  interface StDatepickerFooter {
    'cancelLabel'?: string;
    'okLabel'?: string;
    'onApprove': () => void;
    'onCancel': () => void;
  }
  interface StDatepickerHeader {
    'currentDay': Date;
    'onDateChange': (date: Date) => void;
    'yearFrom'?: number;
    'yearTo'?: number;
  }
  interface StDatepickerInner {
    'currentMonth': Date;
    'datepickerDates': IDatePickerModel[];
    'itemSize': number;
    'onDateSelect': (date: Date) => void;
    'onMonthChange': (date: Date) => void;
    'resolveDayView': (date: IDatePickerModel) => string;
  }
  interface StDatepickerNav {
    'currentDate': Date;
    'format': string;
    'navStep': string;
    'onDateChange': (date: Date) => void;
    'renderDate': () => void;
    'toggleView': () => void;
  }
  interface StDatepickerTopnav {
    'date': Date;
    'onDateChange': (date: Date) => void;
    'renderDate': () => void;
    'toggleView': () => void;
  }
  interface StDaterangepicker {
    'cancelLabel'?: string;
    'dateEnd'?: Date | number;
    'dateStart'?: Date | number;
    'getDateRange': () => Promise<any>;
    'locale'?: string;
    'okLabel'?: string;
    'onDateChange': (start: Date, end: Date) => void;
    'open': boolean;
    'width': number;
  }
  interface StDaterangepickerHeader {
    'dateEnd'?: Date;
    'dateStart'?: Date;
  }
  interface StDownIcon {}
  interface StForwardIcon {}
}

declare global {


  interface HTMLStBackIconElement extends Components.StBackIcon, HTMLStencilElement {}
  var HTMLStBackIconElement: {
    prototype: HTMLStBackIconElement;
    new (): HTMLStBackIconElement;
  };

  interface HTMLStCalendarIconElement extends Components.StCalendarIcon, HTMLStencilElement {}
  var HTMLStCalendarIconElement: {
    prototype: HTMLStCalendarIconElement;
    new (): HTMLStCalendarIconElement;
  };

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

  interface HTMLStDatepickerNavElement extends Components.StDatepickerNav, HTMLStencilElement {}
  var HTMLStDatepickerNavElement: {
    prototype: HTMLStDatepickerNavElement;
    new (): HTMLStDatepickerNavElement;
  };

  interface HTMLStDatepickerTopnavElement extends Components.StDatepickerTopnav, HTMLStencilElement {}
  var HTMLStDatepickerTopnavElement: {
    prototype: HTMLStDatepickerTopnavElement;
    new (): HTMLStDatepickerTopnavElement;
  };

  interface HTMLStDaterangepickerElement extends Components.StDaterangepicker, HTMLStencilElement {}
  var HTMLStDaterangepickerElement: {
    prototype: HTMLStDaterangepickerElement;
    new (): HTMLStDaterangepickerElement;
  };

  interface HTMLStDaterangepickerHeaderElement extends Components.StDaterangepickerHeader, HTMLStencilElement {}
  var HTMLStDaterangepickerHeaderElement: {
    prototype: HTMLStDaterangepickerHeaderElement;
    new (): HTMLStDaterangepickerHeaderElement;
  };

  interface HTMLStDownIconElement extends Components.StDownIcon, HTMLStencilElement {}
  var HTMLStDownIconElement: {
    prototype: HTMLStDownIconElement;
    new (): HTMLStDownIconElement;
  };

  interface HTMLStForwardIconElement extends Components.StForwardIcon, HTMLStencilElement {}
  var HTMLStForwardIconElement: {
    prototype: HTMLStForwardIconElement;
    new (): HTMLStForwardIconElement;
  };
  interface HTMLElementTagNameMap {
    'st-back-icon': HTMLStBackIconElement;
    'st-calendar-icon': HTMLStCalendarIconElement;
    'st-date-part-selector': HTMLStDatePartSelectorElement;
    'st-datepicker': HTMLStDatepickerElement;
    'st-datepicker-footer': HTMLStDatepickerFooterElement;
    'st-datepicker-header': HTMLStDatepickerHeaderElement;
    'st-datepicker-inner': HTMLStDatepickerInnerElement;
    'st-datepicker-nav': HTMLStDatepickerNavElement;
    'st-datepicker-topnav': HTMLStDatepickerTopnavElement;
    'st-daterangepicker': HTMLStDaterangepickerElement;
    'st-daterangepicker-header': HTMLStDaterangepickerHeaderElement;
    'st-down-icon': HTMLStDownIconElement;
    'st-forward-icon': HTMLStForwardIconElement;
  }
}

declare namespace LocalJSX {
  interface StBackIcon {}
  interface StCalendarIcon {}
  interface StDatePartSelector {
    'dataSource'?: IDatePartModel[];
    'date'?: Date;
    'mode'?: string;
    'onDateChange'?: (date: Date) => void;
    'show'?: boolean;
  }
  interface StDatepicker {
    'cancelLabel'?: string;
    'date'?: Date | number;
    'from'?: number;
    'locale'?: string;
    'okLabel'?: string;
    'onDateChange'?: (date: Date) => void;
    'onDateChanged'?: (event: CustomEvent<any>) => void;
    'open'?: boolean;
    'to'?: number;
    'width'?: number;
  }
  interface StDatepickerFooter {
    'cancelLabel'?: string;
    'okLabel'?: string;
    'onApprove'?: () => void;
    'onCancel'?: () => void;
  }
  interface StDatepickerHeader {
    'currentDay'?: Date;
    'onDateChange'?: (date: Date) => void;
    'yearFrom'?: number;
    'yearTo'?: number;
  }
  interface StDatepickerInner {
    'currentMonth'?: Date;
    'datepickerDates'?: IDatePickerModel[];
    'itemSize'?: number;
    'onDateSelect'?: (date: Date) => void;
    'onMonthChange'?: (date: Date) => void;
    'resolveDayView'?: (date: IDatePickerModel) => string;
  }
  interface StDatepickerNav {
    'currentDate'?: Date;
    'format'?: string;
    'navStep'?: string;
    'onDateChange'?: (date: Date) => void;
    'renderDate'?: () => void;
    'toggleView'?: () => void;
  }
  interface StDatepickerTopnav {
    'date'?: Date;
    'onDateChange'?: (date: Date) => void;
    'renderDate'?: () => void;
    'toggleView'?: () => void;
  }
  interface StDaterangepicker {
    'cancelLabel'?: string;
    'dateEnd'?: Date | number;
    'dateStart'?: Date | number;
    'locale'?: string;
    'okLabel'?: string;
    'onDateChange'?: (start: Date, end: Date) => void;
    'onDateChanged'?: (event: CustomEvent<any>) => void;
    'open'?: boolean;
    'width'?: number;
  }
  interface StDaterangepickerHeader {
    'dateEnd'?: Date;
    'dateStart'?: Date;
  }
  interface StDownIcon {}
  interface StForwardIcon {}

  interface IntrinsicElements {
    'st-back-icon': StBackIcon;
    'st-calendar-icon': StCalendarIcon;
    'st-date-part-selector': StDatePartSelector;
    'st-datepicker': StDatepicker;
    'st-datepicker-footer': StDatepickerFooter;
    'st-datepicker-header': StDatepickerHeader;
    'st-datepicker-inner': StDatepickerInner;
    'st-datepicker-nav': StDatepickerNav;
    'st-datepicker-topnav': StDatepickerTopnav;
    'st-daterangepicker': StDaterangepicker;
    'st-daterangepicker-header': StDaterangepickerHeader;
    'st-down-icon': StDownIcon;
    'st-forward-icon': StForwardIcon;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'st-back-icon': LocalJSX.StBackIcon & JSXBase.HTMLAttributes<HTMLStBackIconElement>;
      'st-calendar-icon': LocalJSX.StCalendarIcon & JSXBase.HTMLAttributes<HTMLStCalendarIconElement>;
      'st-date-part-selector': LocalJSX.StDatePartSelector & JSXBase.HTMLAttributes<HTMLStDatePartSelectorElement>;
      'st-datepicker': LocalJSX.StDatepicker & JSXBase.HTMLAttributes<HTMLStDatepickerElement>;
      'st-datepicker-footer': LocalJSX.StDatepickerFooter & JSXBase.HTMLAttributes<HTMLStDatepickerFooterElement>;
      'st-datepicker-header': LocalJSX.StDatepickerHeader & JSXBase.HTMLAttributes<HTMLStDatepickerHeaderElement>;
      'st-datepicker-inner': LocalJSX.StDatepickerInner & JSXBase.HTMLAttributes<HTMLStDatepickerInnerElement>;
      'st-datepicker-nav': LocalJSX.StDatepickerNav & JSXBase.HTMLAttributes<HTMLStDatepickerNavElement>;
      'st-datepicker-topnav': LocalJSX.StDatepickerTopnav & JSXBase.HTMLAttributes<HTMLStDatepickerTopnavElement>;
      'st-daterangepicker': LocalJSX.StDaterangepicker & JSXBase.HTMLAttributes<HTMLStDaterangepickerElement>;
      'st-daterangepicker-header': LocalJSX.StDaterangepickerHeader & JSXBase.HTMLAttributes<HTMLStDaterangepickerHeaderElement>;
      'st-down-icon': LocalJSX.StDownIcon & JSXBase.HTMLAttributes<HTMLStDownIconElement>;
      'st-forward-icon': LocalJSX.StForwardIcon & JSXBase.HTMLAttributes<HTMLStForwardIconElement>;
    }
  }
}


