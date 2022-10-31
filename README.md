# Alpine JS Scroll Amount

Track the users scroll position and their progress on the page 🤿

## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-scroll-amount@latest/dist/scroll-amount.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### With a Package Manager

```shell
yarn add -D alpinejs-scroll-amount

npm install -D alpinejs-scroll-amount
```

```js
import Alpine from 'alpinejs'
import scrollAmount from 'alpinejs-scroll-amount'

Alpine.plugin(scrollAmount)

Alpine.start()
```

## Example

```html
<div
  x-data="{ scrollPos: {} }"
  x-init="scrollPos = $scrollAmount"
  x-on:scroll.window="scrollPos = $scrollAmount"
>
  <span
    class="h-px bg-green-500"
    :class="{ 'bg-green-600': scrollPos.atEnd }"
    :style="{ width: `${scrollPos.scrollPercent}%` }"
  >
  </span>

  <article> ... </article>
</div>
```

This is a basic example of showing a progress bar based on the user scroll.

### Data Returned

```js
return {
  scrollPx: 0,
  scrollPercent: 0,
  atStart: true / false,
  atEnd: true / false,
}
```

## Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-scroll-amount)
![](https://img.shields.io/npm/v/alpinejs-scroll-amount)
![](https://img.shields.io/npm/dt/alpinejs-scroll-amount)
![](https://img.shields.io/github/license/markmead/alpinejs-scroll-amount)
