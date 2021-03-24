---
id: button
title: Button
sidebar_label: Button
---

### `<Button/>`

Rendering a `<Button>` will allow you create buttons in the screen.

#### Preview:

import { Button, View, Heading } from 'ada-design';

<Heading size={500} textTransform="capitalize" marginBottom={8}>
  Default variant style (variant="default")
</Heading>
<View  marginRight={10} marginBottom={10}>
  <Button
    variant="default"
    intention="default"
    marginRight={10}
    onClick={() => {}}
    textTransform="capitalize"
  >
    Default Button
  </Button>
  <Button
    variant="default"
    intention="success"
    marginRight={10}
    onClick={() => {}}
    textTransform="capitalize"
  >
    Success Button
  </Button>
  <Button
    variant="default"
    intention="warning"
    marginRight={10}
    onClick={() => {}}
    textTransform="capitalize"
  >
    Warning Button
  </Button>
  <Button
    variant="default"
    intention="danger"
    marginRight={10}
    onClick={() => {}}
    textTransform="capitalize"
  >
    Danger Button
  </Button>
</View>

<Heading size={500} textTransform="capitalize" marginBottom={8}>
  Primary variant style (variant="primary")
</Heading>
<View  marginRight={10} marginBottom={10}>
  <Button
    variant="primary"
    intention="default"
    marginRight={10}
    onClick={() => {}}
    textTransform="capitalize"
  >
    Default Button
  </Button>
  <Button
    variant="primary"
    intention="success"
    marginRight={10}
    onClick={() => {}}
    textTransform="capitalize"
  >
    Success Button
  </Button>
  <Button
    variant="primary"
    intention="warning"
    marginRight={10}
    onClick={() => {}}
    textTransform="capitalize"
  >
    Warning Button
  </Button>
  <Button
    variant="primary"
    intention="danger"
    marginRight={10}
    onClick={() => {}}
    textTransform="capitalize"
  >
    Danger Button
  </Button>
</View>

<Heading size={500} textTransform="capitalize" marginBottom={8}>
  Simple variant style (variant="simple")
</Heading>
<View marginRight={10} marginBottom={10}>
  <Button
    variant="simple"
    intention="default"
    marginRight={10}
    onClick={() => {}}
    textTransform="capitalize"
  >
    Default Button
  </Button>
  <Button
    variant="simple"
    intention="success"
    marginRight={10}
    onClick={() => {}}
    textTransform="capitalize"
  >
    Success Button
  </Button>
  <Button
    variant="simple"
    intention="warning"
    marginRight={10}
    onClick={() => {}}
    textTransform="capitalize"
  >
    Warning Button
  </Button>
  <Button
    variant="simple"
    intention="danger"
    marginRight={10}
    onClick={() => {}}
    textTransform="capitalize"
  >
    Danger Button
  </Button>
</View>

<Heading size={500} textTransform="capitalize" marginBottom={8}>
  Button Sizes
</Heading>
<View marginRight={10} marginBottom={10}>
  <Button
    size={20}
    variant="primary"
    marginRight={10}
    onClick={() => {}}
  >
    20 Size Button
  </Button>
  <Button
    size={24}
    variant="primary"
    marginRight={10}
    onClick={() => {}}
  >
    24 Size Button
  </Button>
   <Button
    size={28}
    variant="primary"
    marginRight={10}
    onClick={() => {}}
  >
    28 Size Button
  </Button>
   <Button
    size={32}
    variant="primary"
    marginRight={10}
    onClick={() => {}}
  >
    32 Size Button
  </Button>
   <Button
    size={36}
    variant="primary"
    marginRight={10}
    onClick={() => {}}
  >
    36 Size Button
  </Button>
   <Button
    size={40}
    variant="primary"
    marginRight={10}
    onClick={() => {}}
  >
    40 Size Button
  </Button>
   <Button
    size={44}
    variant="primary"
    marginRight={10}
    onClick={() => {}}
  >
    44 Size Button
  </Button>
   <Button
    size={48}
    variant="primary"
    marginRight={10}
    onClick={() => {}}
  >
    48 Size Button
  </Button>
   <Button
    size={52}
    variant="primary"
    marginRight={10}
    onClick={() => {}}
  >
    52 Size Button
  </Button>
   <Button
    size={56}
    variant="primary"
    marginRight={10}
    onClick={() => {}}
  >
    56 Size Button
  </Button>
</View>

#### Example usage:

```jsx
import React from 'react';
import { Button } from 'ada-design';

const AnyOtherComponent = () => {
  return (
    <>
      <Button variant="default" intention="default" onClick={() => {}}>
        Default Button
      </Button>
      <Button variant="primary" intention="success" onClick={() => {}}>
        Success Button
      </Button>
      <Button variant="simple" intention="warning" onClick={() => {}}>
        Warning Button
      </Button>
      <Button variant="default" intention="danger" size={56} onClick={() => {}}>
        Danger Button
      </Button>
    </>
  );
};
```

### `<Button/>` with custom design

You can use our standard designs or customize it to be in the way you want. In order to customize it, please take a look at [Customize components styling](../advanced/customize-component-styling)

#### Button Props

| Props         | Optional | Type                                             | Description                                   |
| ------------- | -------- | ------------------------------------------------ | --------------------------------------------- |
| `isFullWidth` | Yes      | `boolean`                                        | Should take `100%` of the parent's width?     |
| `onClick`     | Yes      | `Function`                                       | `Function` executed whe the user clicks       |
| `type`        | Yes      | `string`                                         | Button type                                   |
| `variant`     | Yes      | [`ButtonVariantType`](types/button-variant-type) | Button style. Example: `variant` or `default` |

:::note
It's important to notice that every **ADA Design** component allows you to use any _props_ from the [`View`](view) component.
:::
