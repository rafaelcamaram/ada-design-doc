---
id: flex
title: Flex
sidebar_label: Flex
---

### `<Flex/>`

In the same way as the [`View`](view) component, you can consider the `Flex` component as a wildcard. It'll accept all the `props` defined by [`View`](view) but it already sets `display: flex;` to it; allowing us to use [_flex_ properties](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) in a better way.

It is worth remembering that the `Flex` component originally does not have any visual effects, it's usually used to wrap other components and arrange them; however, it can be used/customized (using `props` or `styled-components`) in several ways to achieve the desired look. We can consider that it acts in a similar way to a `div` (with `display: flex;` set) that can be mutated to be rendered like any other element (` p`, `div`,`h1`, etc...)

#### Preview:

import { Flex, Text } from 'ada-design';

<Flex width={350} height={200} justifyContent="center" alignItems="center"  backgroundColor="#4a00e0">
  <Text color="white">Element in the middle of the box</Text>
</Flex>

#### Example usage:

```jsx
import React from 'react';
import { Flex, Text } from 'ada-design';

const SomeComponent = () => {
  return (
    <>
      <Flex>{/* Some other components to be arranged */}</Flex>

      <Flex width={100} height={100} justifyContent="center" alignItems="center" backgroundColor="#4a00e0">
        <Text>Element in the middle of the box</Text>
      </Flex>
    </>
  );
};
```

### `<Flex />` with custom design

You can use our standard designs or customize it to be in the way you want. In order to customize it, please take a look at [Customize components styling](../advanced/customize-component-styling)

#### Flex Props

:::tip
The `Flex` component accepts any `props` set on [View](view)
:::
