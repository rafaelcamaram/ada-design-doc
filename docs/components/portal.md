---
id: portal
title: Portal
sidebar_label: Portal
---

### `<Portal/>`

Using the `<Portal>` you will be able to take advantage of `ReactDOM.createPortal` API; allowing you render components directly in the `.root`/`body` HTML node.

#### Preview:

import { Portal, Flex } from 'ada-design';

<Portal>
  <Flex 
    width={300} 
    height={100} 
    justifyContent="center" 
    alignItems="center" 
    position="fixed" 
    bottom={0} 
    right={0} 
    backgroundColor="jewel" 
    color="white">
    I'm the Portal content
  </Flex>
</Portal>

#### Example usage:

```jsx
import React from 'react';
import { Portal, Flex } from 'ada-design';

const SomeComponent = () => {
  return (
    <Portal>
      <Flex
        width={300}
        height={100}
        justifyContent="center"
        alignItems="center"
        position="fixed"
        bottom={0}
        right={0}
        backgroundColor="jewel"
        color="white"
      >
        I'm the Portal content
      </Flex>
    </Portal>
  );
};
```

### `<Portal />` with custom design

Since the Portal doesn't have any visual side-effect, you only need to customize the content of it (_that can be anything you want_); to do so, you can use our standard designs or customize it to be in the way you want. Please take a look at [Customize components styling](../advanced/customize-component-styling)

#### Portal Props

| Props      | Optional | Type              | Description                                     |
| ---------- | -------- | ----------------- | ----------------------------------------------- |
| `children` | Yes      | `React.ReactNode` | Component to be displayed as the Portal content |
