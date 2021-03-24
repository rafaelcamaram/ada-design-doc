---
id: link
title: Link
sidebar_label: Link
---

### `<Link/>`

Description to be done.

#### Preview:

import { Link } from "ada-design";

<Link target="_blank" href="https://google.com/">
  Link with href
</Link>

<Link onClick={() => alert('Clicked')}>
  Link with onClick
</Link>

#### Example usage:

```jsx
import React from 'react';
import { Link } from 'ada-design';

const SomeComponent = () => {
  return (
    <>
      <Link target="_blank" href="https://google.com/">
        Link with href
      </Link>

      <Link onClick={() => alert('Clicked')}>Link with onClick</Link>
    </>
  );
};
```

### `<Link />` with custom design

You can use our standard designs or customize it to be in the way you want. In order to customize it, please take a look at [Customize components styling](../advanced/customize-component-styling)

#### Link Props

| Props     | Optional | Type     | Description                                        |
| --------- | -------- | -------- | -------------------------------------------------- |
| `href`    | Yes      | `string` | Link URL that should be opened by clicking on it   |
| `onClick` | Yes      | `string` | Function that should be executed by clicking on it |

:::note
It's important to notice that every **ADA Design** component allows you to use any _props_ from the [`View`](view) component.
:::
