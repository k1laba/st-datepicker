![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)


# Demo

https://k1laba.github.io/st-datepicker/

## Installation

You can install it using npm

```
  npm install @k1laba/st-datepicker --save
```

or manually add a script tag in your html

```
  <script src="https://unpkg.com/@k1laba/st-datepicker/dist/st-datepicker.js"></script>
```

## Examples

To show date picker:

```
  <st-datepicker></st-datepicker>
```

subscribe to date change:

```
  window.onload = () => {
    const dateEl = document.querySelector('st-datepicker');
    const resultEl = document.querySelector('#date-result');
    dateEl.addEventListener('dateChanged', (e) => resultEl.innerHTML = e.detail.toDateString());
  };

```

get date from date picker:

```
  (async () => {
    resultEl.innerHTML = (await dateEl.getDate()).toDateString();
  })();
```

To show date range picker:

```
  <st-daterangepicker></st-daterangepicker>
```

subscribe to date range change:

```
  window.onload = () => {
    const rangeEl = document.querySelector('st-daterangepicker');
    const rangeResultEl = document.querySelector('#range-result');
    rangeEl.addEventListener('dateChanged', (e) => {
      rangeResultEl.innerHTML = e.detail.start.toDateString() + ' - ' + e.detail.end.toDateString();
    });
  };

```

get date range from date range picker:

```
  (async () => {
    const rangeInfo = await rangeEl.getDateRange();
    rangeResultEl.innerHTML = rangeInfo.start.toDateString() + ' - ' + rangeInfo.end.toDateString();
  })();
```