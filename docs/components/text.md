---
id: text
title: Text
sidebar_label: Text
---

### `<Text/>`

Description to be done.

#### Preview:

import { Text } from "ada-design";

<Text as="p" size={300}>
  Text 300
</Text>
<Text as="p" size={400}>
  Text 400 (Default)
</Text>
<Text as="p" size={500}>
  Text 500
</Text>
<Text as="p" size={600} color="jewel">
  Text 600
</Text>

#### Example usage:

```jsx
import React from 'react';
import { Text } from 'ada-design';

const SomeComponent = () => {
  return (
    <>
      <Text as="p" size={300}>
        Text 300
      </Text>
      <Text as="p" size={400}>
        Text 400 (Default)
      </Text>
      <Text as="p" size={500}>
        Text 500
      </Text>
      <Text as="p" size={600} color="jewel">
        Text 600
      </Text>
    </>
  );
};
```

### `<Text />` with custom design

You can use our standard designs or customize it to be in the way you want. In order to customize it, please take a look at [Customize components styling](../advanced/customize-component-styling)

#### Text Props

| Props   | Optional | Type                          | Description |
| ------- | -------- | ----------------------------- | ----------- |
| `size`  | Yes      | `300 400 500 600`             | Text size   |
| `color` | Yes      | [ColorType](types/color-type) | Text color  |

:::note
It's important to notice that every **ADA Design** component allows you to use any _props_ from the [`View`](view) component.
:::

:::note
Since [**ADA Design**](https://adadesign.io/) is built in the top of `styled-components`, you can use the `as` prop in order to render the `Text` component as the HTML component you want (`p`, `span`, `h1`, `h2`, etc...)
:::
