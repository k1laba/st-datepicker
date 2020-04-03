# st-daterangepicker



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description | Type                               | Default     |
| -------------- | -------------- | ----------- | ---------------------------------- | ----------- |
| `cancelLabel`  | `cancel-label` |             | `string`                           | `undefined` |
| `dateEnd`      | `date-end`     |             | `Date \| number`                   | `undefined` |
| `dateStart`    | `date-start`   |             | `Date \| number`                   | `undefined` |
| `locale`       | `locale`       |             | `string`                           | `undefined` |
| `okLabel`      | `ok-label`     |             | `string`                           | `undefined` |
| `onDateChange` | --             |             | `(start: Date, end: Date) => void` | `undefined` |
| `open`         | `open`         |             | `boolean`                          | `undefined` |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `dateChanged` |             | `CustomEvent<any>` |


## Methods

### `getDateRange() => Promise<any>`



#### Returns

Type: `Promise<any>`




## Dependencies

### Depends on

- [st-datepicker-topnav](../inner-components/st-datepicker-topnav)
- [st-daterangepicker-header](../inner-components/st-daterangepicker-header)
- [st-datepicker-inner](../inner-components/st-datepicker-inner)
- [st-datepicker-footer](../inner-components/st-datepicker-footer)

### Graph
```mermaid
graph TD;
  st-daterangepicker --> st-datepicker-topnav
  st-daterangepicker --> st-daterangepicker-header
  st-daterangepicker --> st-datepicker-inner
  st-daterangepicker --> st-datepicker-footer
  st-datepicker-topnav --> st-calendar-icon
  st-datepicker-topnav --> st-datepicker-nav
  st-datepicker-nav --> st-back-icon
  st-datepicker-nav --> st-forward-icon
  st-daterangepicker-header --> st-forward-icon
  st-datepicker-inner --> st-datepicker-nav
  style st-daterangepicker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
