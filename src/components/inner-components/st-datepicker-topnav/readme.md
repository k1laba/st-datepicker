# st-datepicker-topnav



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute | Description | Type                   | Default     |
| -------------- | --------- | ----------- | ---------------------- | ----------- |
| `date`         | --        |             | `Date`                 | `undefined` |
| `onDateChange` | --        |             | `(date: Date) => void` | `undefined` |
| `renderDate`   | --        |             | `() => void`           | `undefined` |
| `toggleView`   | --        |             | `() => void`           | `undefined` |


## Dependencies

### Used by

 - [st-datepicker](../../st-datepicker)
 - [st-daterangepicker](../../st-daterangepicker)

### Depends on

- [st-datepicker-nav](../st-datepicker-nav)

### Graph
```mermaid
graph TD;
  st-datepicker-topnav --> st-datepicker-nav
  st-datepicker --> st-datepicker-topnav
  st-daterangepicker --> st-datepicker-topnav
  style st-datepicker-topnav fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
