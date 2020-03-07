# st-daterangepicker



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute | Description | Type      | Default     |
| ----------- | --------- | ----------- | --------- | ----------- |
| `dateEnd`   | --        |             | `Date`    | `undefined` |
| `dateStart` | --        |             | `Date`    | `undefined` |
| `open`      | `open`    |             | `boolean` | `undefined` |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `dateChanged` |             | `CustomEvent<any>` |


## Methods

### `getEndDate() => Promise<Date>`



#### Returns

Type: `Promise<Date>`



### `getStartDate() => Promise<Date>`



#### Returns

Type: `Promise<Date>`




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
  st-datepicker-topnav --> ion-icon
  st-datepicker-topnav --> st-datepicker-nav
  st-datepicker-nav --> ion-icon
  st-daterangepicker-header --> ion-icon
  st-datepicker-inner --> st-datepicker-nav
  style st-daterangepicker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
