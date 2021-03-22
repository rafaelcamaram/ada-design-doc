---
id: toggle-section
title: ToggleSection
sidebar_label: ToggleSection
---

### `<ToggleSection/>`

Rendering a `<ToggleSection>` will allow you toggle elements in the screen with a header.

#### Example usage:

```jsx
import React from 'react';
import { ToggleSection, Flex } from 'ada-design';

const AnyOtherComponent = () => {
  return (
    <>
      <ToggleSection
        isToggleDisabled={false}
        headerComponent={(isCollapsed) => <Flex>Header - Action: {isCollapsed ? 'Show' : 'Hide'}</Flex>}
      >
        ({isCollapsed}) => (
        <Text>
          This is the toggle section content. Current collapse value: {isCollapsed ? 'Collapsed' : 'Expanded'}
        </Text>
        )
      </ToggleSection>
    </>
  );
};
```

#### Badge Props

| Props              | Optional | Type                                                                     | Description                                        |
| ------------------ | -------- | ------------------------------------------------------------------------ | -------------------------------------------------- |
| `isToggleDisabled` | Yes      | `boolean`                                                                | If `true` it'll block the user to open the section |
| `children`         | Yes      | `({ isCollapsed, setIsCollapsed, isToggleDisabled }) => React.ReactNode` | Function that will render the content to be toggle |
| `headerComponent`  | Yes      | `(isCollapsed, isToggleDisabled) => React.ReactNode`                     | Function that will render the headercontent        |

:::note
The `ToggleSection` component is one of the exceptions that doesn't allow [`View`](view.html) props by default; but it's not necessary since you can provide your own `headerComponent` and `children`.
:::
