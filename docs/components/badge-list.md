---
id: badge-list
title: BadgeList
sidebar_label: BadgeList
---

### `<BadgeList/>`

Rendering a `<BadgeList>` will allow you create badges in the screen.

#### Example usage:

```jsx
import React from 'react';
import { BadgeList } from 'ada-design';

export const AnyOtherComponent = () => {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return <BadgeList data={data} />;
};
```

#### Badge Props

| Props  | Optional | Type       | Description                                           |
| ------ | -------- | ---------- | ----------------------------------------------------- |
| `data` | Yes      | `string[]` | String array of texts that should be render as badges |

:::note
It's important to notice that every **ADA Design** component allows you to use any _props_ from the [`View`](view.html) component.
:::
