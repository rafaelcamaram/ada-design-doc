---
id: color-type
title: ColorType
sidebar_label: ColorType
---

:::caution
This page is still being written. It'll be done soon.
:::

```tsx
const COLORS = {
  white: '#ffffff',
  black: '#000000',
  blackWithoutOpacity30: 'rgba(0, 0, 0, 0.3)',
  agitatedBlue: 'rgb(66, 90, 112)',
  lochmara: '#0679C6',
  funGreen: 'rgb(0, 120, 63)',
  jewel: '#168350',
  rope: 'rgb(149, 89, 31)',
  gamboge: 'rgb(238, 153, 19)',
  milanoRed: 'rgb(191, 14, 9)',
  alizarinCrimson: '#E71F18',
};

export type ColorType = { [property in keyof typeof COLORS]: string } | string;
```
