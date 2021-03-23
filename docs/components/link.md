---
id: link
title: Link
sidebar_label: Link
---

### `<Link/>`

Description to be done.

#### Preview:

import { Link } from "ada-design";

<Link as="a" target="_blank" href="https://google.com/">
  Link with href
</Link>

<Link as="a" onClick={() => alert('Clicked')}>
  Link with onClick
</Link>

#### Example usage:

```jsx
import React from 'react';
import { Link } from 'ada-design';

const SomeComponent = () => {
  return (
    <>
      <Link as="a" target="_blank" href="https://google.com/">
        Link with href
      </Link>

      <Link as="a" onClick={() => alert('Clicked')}>
        Link with onClick
      </Link>
    </>
  );
};
```

#### Link Props

| Props     | Optional | Type     | Description                                        |
| --------- | -------- | -------- | -------------------------------------------------- |
| `href`    | Yes      | `string` | Link URL that should be opened by clicking on it   |
| `onClick` | Yes      | `string` | Function that should be executed by clicking on it |

:::note
It's important to notice that every **ADA Design** component allows you to use any _props_ from the [`View`](view.html) component.
:::
