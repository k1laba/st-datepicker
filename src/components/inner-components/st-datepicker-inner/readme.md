# st-datepicker-inner



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute | Description | Type                                 | Default     |
| ----------------- | --------- | ----------- | ------------------------------------ | ----------- |
| `currentMonth`    | --        |             | `Date`                               | `undefined` |
| `datepickerDates` | --        |             | `IDatePickerModel[]`                 | `undefined` |
| `onDateSelect`    | --        |             | `(date: Date) => void`               | `undefined` |
| `onMonthChange`   | --        |             | `(date: Date) => void`               | `undefined` |
| `resolveDayView`  | --        |             | `(date: IDatePickerModel) => string` | `undefined` |


## Dependencies

### Used by

 - [st-datepicker](../../st-datepicker)
 - [st-daterangepicker](../../st-daterangepicker)

### Depends on

- [st-datepicker-nav](../st-datepicker-nav)

### Graph
```mermaid
graph TD;
  st-datepicker-inner --> st-datepicker-nav
  st-datepicker-nav --> st-back-icon
  st-datepicker-nav --> st-forward-icon
  st-datepicker --> st-datepicker-inner
  st-daterangepicker --> st-datepicker-inner
  style st-datepicker-inner fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
