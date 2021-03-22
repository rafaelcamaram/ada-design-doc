---
id: button
title: Button
sidebar_label: Button
---

### `<Button/>`

Rendering a `<Button>` will allow you create buttons in the screen.

#### Preview:

import { Button } from 'ada-design';
import styled from 'styled-components';

<Button variant="default" onClick={() => {}}>
ADA Design Button 🌮 with default style
</Button>

<Button variant="primary" onClick={() => {}}>
ADA Design Button 🌮 with primary style
</Button>

<Button isFullWidth variant="primary" onClick={() => {}}>
ADA Design Button 🌮 with full width
</Button>

#### Example usage:

```jsx
import React from 'react';
import { Button } from 'ada-design';

const AnyOtherComponent = () => {
  return (
    <>
      <Button variant="default" onClick={() => {}}>
        ADA Design Button 🌮 with default style
      </Button>

      <Button variant="primary" onClick={() => {}}>
        ADA Design Button 🌮 with primary style
      </Button>

      <Button isFullWidth variant="primary" onClick={() => alert('Primary Button Handler')}>
        ADA Design Button 🌮 with full width
      </Button>
    </>
  );
};
```

### `<Button/>` with custom design

You can use our standard designs or customize it to be in the way you want -- passing props to the `styled-components` or not.

#### Example usage:

```jsx
import React from 'react';
import styled from 'styled-components';
import { Button } from 'ada-design';

const AnyOtherComponent = () => {
  const someCondition = true;

  return (
    <>
      <StyledButton variant="primary" onClick={() => {}}>
        ADA Design Button 🌮 with custom (your own) style
      </StyledButton>

      <StyledButton variant="primary" someProp={someCondition} onClick={() => {}}>
        ADA Design Button 🌮 with custom (your own) style
      </StyledButton>
    </>
  );
};

const StyledButton = styled(Button)`
  &:hover {
    background-color: ${({ someProp }) => {
      return someProp ? 'blue' : 'green';
    }};
  }
`;
```

> `ada-design` implements at the top of [Styled Components](https://styled-components.com/), so we highly recommend using it -- even though is not mandatory.

#### Button Props

| Props         | Optional | Type                                                  | Description                                   |
| ------------- | -------- | ----------------------------------------------------- | --------------------------------------------- |
| `isFullWidth` | Yes      | `boolean`                                             | Should take `100%` of the parent's width?     |
| `onClick`     | Yes      | `Function`                                            | `Function` executed whe the user clicks       |
| `type`        | Yes      | `string`                                              | Button type                                   |
| `variant`     | Yes      | [`ButtonVariantType`](types/button-variant-type.html) | Button style. Example: `variant` or `default` |

:::note
It's important to notice that every **ADA Design** component allows you to use any _props_ from the [`View`](view.html) component.
:::
