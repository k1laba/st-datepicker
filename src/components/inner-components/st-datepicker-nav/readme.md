# st-datepicker-nav



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute  | Description | Type                   | Default     |
| -------------- | ---------- | ----------- | ---------------------- | ----------- |
| `currentDate`  | --         |             | `Date`                 | `undefined` |
| `format`       | `format`   |             | `string`               | `undefined` |
| `navStep`      | `nav-step` |             | `string`               | `'d'`       |
| `onDateChange` | --         |             | `(date: Date) => void` | `undefined` |
| `toggleView`   | --         |             | `() => void`           | `undefined` |


## Dependencies

### Used by

 - [st-datepicker-inner](../st-datepicker-inner)
 - [st-datepicker-topnav](../st-datepicker-topnav)

### Depends on

- ion-icon

### Graph
```mermaid
graph TD;
  st-datepicker-nav --> ion-icon
  st-datepicker-inner --> st-datepicker-nav
  st-datepicker-topnav --> st-datepicker-nav
  style st-datepicker-nav fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
