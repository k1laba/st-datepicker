# st-datepicker-topnav



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute | Description | Type                   | Default     |
| -------------- | --------- | ----------- | ---------------------- | ----------- |
| `onDateChange` | --        |             | `(date: Date) => void` | `undefined` |
| `selectedDay`  | --        |             | `Date`                 | `undefined` |
| `toggleView`   | --        |             | `() => void`           | `undefined` |


## Dependencies

### Used by

 - [st-datepicker](../../st-dateicker)
 - [st-daterangepicker](../../st-daterangepicker)

### Depends on

- ion-icon
- [st-datepicker-nav](../st-datepicker-nav)

### Graph
```mermaid
graph TD;
  st-datepicker-topnav --> ion-icon
  st-datepicker-topnav --> st-datepicker-nav
  st-datepicker-nav --> ion-icon
  st-datepicker --> st-datepicker-topnav
  st-daterangepicker --> st-datepicker-topnav
  style st-datepicker-topnav fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
