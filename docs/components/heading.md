---
id: heading
title: Heading
sidebar_label: Heading
---

### `<Heading/>`

Description to be done.

#### Preview:

import { Heading } from "ada-design";

<Heading size={100}>Heading Content</Heading>
<Heading size={200}>Heading Content</Heading>
<Heading size={300}>Heading Content</Heading>
<Heading size={400}>Heading Content</Heading>
<Heading size={500}>Heading Content</Heading>
<Heading size={600}>Heading Content</Heading>
<Heading size={700}>Heading Content</Heading>
<Heading size={800}>Heading Content</Heading>
<Heading size={900}>Heading Content</Heading>

#### Example usage:

```jsx
import React from 'react';
import { Heading } from 'ada-design';

const SomeComponent = () => {
  return (
    <>
      <Heading size={100}>Heading Content</Heading>
      <Heading size={200}>Heading Content</Heading>
      <Heading size={300}>Heading Content</Heading>
      <Heading size={400}>Heading Content</Heading>
      <Heading size={500}>Heading Content</Heading>
      <Heading size={600}>Heading Content</Heading>
      <Heading size={700}>Heading Content</Heading>
      <Heading size={800}>Heading Content</Heading>
      <Heading size={900}>Heading Content</Heading>
    </>
  );
};
```

### `<Heading />` with custom design

You can use our standard designs or customize it to be in the way you want. In order to customize it, please take a look at [Customize components styling](../advanced/customize-component-styling)

#### Heading Props

| Props  | Optional | Type                           | Description |
| ------ | -------- | ------------------------------ | ----------- |
| `size` | No       | `100 ~ 900 (increment of 100)` | Font size   |

:::note
It's important to notice that every **ADA Design** component allows you to use any _props_ from the [`View`](view) component.
:::

:::note
Since [**ADA Design**](https://adadesign.io/) is built in the top of `styled-components`, you can use the `as` prop in order to render the `Text` component as the HTML component you want (`p`, `span`, `h1`, `h2`, etc...)
:::
