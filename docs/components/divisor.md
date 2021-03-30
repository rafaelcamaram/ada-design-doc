---
id: divisor
title: Divisor
sidebar_label: Divisor
---

### `<Divisor/>`

Using the `<Divisor>` will allow you to render a line between other components.

#### Preview:

import { Divisor } from 'ada-design';

<p>First Component</p>
<Divisor />
<p>Second Component</p>
<Divisor color="red" />
<p>Third Component</p>
<Divisor color="blue" height={10} />
<p>Fourth Component</p>
<Divisor color="jewel" height={10} />

#### Example usage:

```jsx
import React from 'react';
import { Divisor } from 'ada-design';

const SomeComponent = () => {
  return (
    <>
      <p>First Component</p>
      <Divisor />
      <p>Second Component</p>
      <Divisor color="red" />
      <p>Third Component</p>
      <Divisor color="blue" height={10} />
      <p>Fourth Component - using theme color</p>
      <Divisor color="jewel" height={10} />
    </>
  );
};
```

### `<Divisor />` with custom design

You can use our standard designs or customize it to be in the way you want. In order to customize it, please take a look at [Customize components styling](../advanced/customize-component-styling)

#### Divisor Props

| Props    | Optional | Type                          | Description                               |
| -------- | -------- | ----------------------------- | ----------------------------------------- |
| `color`  | Yes      | [ColorType](types/color-type) | Divisor color                             |
| `height` | Yes      | `number`                      | Number of `px`s used as height of Divisor |

:::note
It's important to notice that every **ADA Design** component allows you to use any _props_ from the [`View`](view) component.
:::
