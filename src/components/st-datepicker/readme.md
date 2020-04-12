# st-datepicker



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description | Type                   | Default     |
| -------------- | -------------- | ----------- | ---------------------- | ----------- |
| `cancelLabel`  | `cancel-label` |             | `string`               | `undefined` |
| `date`         | `date`         |             | `Date \| number`       | `undefined` |
| `from`         | `from`         |             | `number`               | `undefined` |
| `locale`       | `locale`       |             | `string`               | `undefined` |
| `okLabel`      | `ok-label`     |             | `string`               | `undefined` |
| `onDateChange` | --             |             | `(date: Date) => void` | `undefined` |
| `open`         | `open`         |             | `boolean`              | `undefined` |
| `to`           | `to`           |             | `number`               | `undefined` |
| `width`        | `width`        |             | `number`               | `300`       |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `dateChanged` |             | `CustomEvent<any>` |


## Methods

### `getDate() => Promise<Date>`



#### Returns

Type: `Promise<Date>`




## Dependencies

### Depends on

- [st-datepicker-topnav](../inner-components/st-datepicker-topnav)
- [st-datepicker-header](../inner-components/st-datepicker-header)
- [st-datepicker-inner](../inner-components/st-datepicker-inner)
- [st-datepicker-footer](../inner-components/st-datepicker-footer)

### Graph
```mermaid
graph TD;
  st-datepicker --> st-datepicker-topnav
  st-datepicker --> st-datepicker-header
  st-datepicker --> st-datepicker-inner
  st-datepicker --> st-datepicker-footer
  st-datepicker-topnav --> st-calendar-icon
  st-datepicker-topnav --> st-datepicker-nav
  st-datepicker-nav --> st-back-icon
  st-datepicker-nav --> st-forward-icon
  st-datepicker-header --> st-down-icon
  st-datepicker-header --> st-date-part-selector
  st-datepicker-inner --> st-datepicker-nav
  style st-datepicker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
