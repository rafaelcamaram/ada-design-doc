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

#### Heading Props

| Props  | Optional | Type                           | Description |
| ------ | -------- | ------------------------------ | ----------- |
| `size` | No       | `100 ~ 900 (increment of 100)` | Font size   |

:::note
It's important to notice that every **ADA Design** component allows you to use any _props_ from the [`View`](view.html) component.
:::