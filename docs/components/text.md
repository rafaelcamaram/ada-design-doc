---
id: text
title: Text
sidebar_label: Text
---

### `<Text/>`

Description to be done.

#### Preview:

import { Text } from "ada-design";

<Text as="p" color="red">Paragraph</Text>

<Text as="span"  color="blue">Span</Text>

<Text as="p"  color="jewel">Paragram with theme color</Text>

#### Example usage:

```jsx
import React from 'react';
import { Text } from 'ada-design';

const SomeComponent = () => {
  return (
    <>
      <Text as="p" color="red">
        Paragraph
      </Text>
      <Text as="span" color="blue">
        Span
      </Text>
      <Text as="span" color="jewel">
        Span with theme color
      </Text>
    </>
  );
};
```

### `<Text />` with custom design

You can use our standard designs or customize it to be in the way you want. In order to customize it, please take a look at [Customize components styling](../advanced/customize-component-styling)

#### Text Props

:::note
It's important to notice that every **ADA Design** component allows you to use any _props_ from the [`View`](view) component.
:::

:::note
Since [**ADA Design**](https://adadesign.io/) is built in the top of `styled-components`, you can use the `as` prop in order to render the `Text` component as the HTML component you want (`p`, `span`, `h1`, `h2`, etc...)
:::
