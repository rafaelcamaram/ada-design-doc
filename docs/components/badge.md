---
id: badge
title: Badge
sidebar_label: Badge
---

### `<Badge/>`

Rendering a `<Badge>` will allow you create badges in the screen.

#### Preview:

import { Badge } from 'ada-design';

<Badge textColor="#000" text="Badge with custom text color" />

<Badge color="rgba(255, 68, 0, 0.5)" text="Badge with custom color" />

<Badge
color="#0D65C2"
text="Badge with click handler"
onClick={() => alert("Badge with click handler")}
/>

<Badge text="1" variant="circle" color="rgba(255, 68, 0, 0.5)" />

<Badge text="10" variant="circle" color="#0D65C2" />

<Badge text="100" variant="circle" color="#0FA530" />

<Badge text="1000" variant="circle" color="#FF4400" onClick={() => alert('Badge with click handler')} />

#### Example usage:

```jsx
import React from 'react';
import { Badge } from 'ada-design';

const AnyOtherComponent = () => {
  return (
    <>
      <Badge text="Badge" />

      <Badge textColor="#000" text="Badge with custom text color" />

      <Badge color="rgba(255, 68, 0, 0.5)" text="Badge with custom color" />

      <Badge color="#0D65C2" text="Badge with click handler" onClick={() => alert('Badge with click handler')} />

      <Badge text="1" variant="circle" color="rgba(255, 68, 0, 0.5)" />

      <Badge text="10" variant="circle" color="#0D65C2" />

      <Badge text="100" variant="circle" color="#0FA530" />

      <Badge text="1000" variant="circle" color="#FF4400" onClick={() => alert('Badge with click handler')} />
    </>
  );
};
```

#### Badge Props

| Props        | Optional | Type                                       | Description                             |
| ------------ | -------- | ------------------------------------------ | --------------------------------------- |
| `variant`    | Yes      | `"default" or "circle"`                    | Badge variant style                     |
| `onClick`    | Yes      | `Function`                                 | `Function` executed whe the user clicks |
| `text`       | Yes      | `string`                                   | Badge text content                      |
| `border`     | Yes      | `string`                                   | Badge border                            |
| `color`      | Yes      | `string`                                   | Badge background color                  |
| `textColor`  | Yes      | `string`                                   | Badge text color                        |
| `fontWeight` | Yes      | [FontWeightValue](types/font-weight-value) | Badge text font weight                  |

:::note
It's important to notice that every **ADA Design** component allows you to use any _props_ from the [`View`](view) component.
:::
