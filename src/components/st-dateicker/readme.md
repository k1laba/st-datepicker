# st-datepicker



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type      | Default     |
| -------- | --------- | ----------- | --------- | ----------- |
| `date`   | --        |             | `Date`    | `undefined` |
| `from`   | `from`    |             | `number`  | `undefined` |
| `open`   | `open`    |             | `boolean` | `undefined` |
| `to`     | `to`      |             | `number`  | `undefined` |


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
  st-datepicker-topnav --> st-datepicker-nav
  st-datepicker-header --> st-date-part-selector
  st-datepicker-inner --> st-datepicker-nav
  style st-datepicker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
