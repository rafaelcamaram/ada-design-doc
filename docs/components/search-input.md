---
id: search-input
title: SearchInput
sidebar_label: SearchInput
---

### `<SearchInput/>`

Description to be done.

#### Preview:

import { SearchInput, ADADesignProvider } from "ada-design";

<ADADesignProvider isEnabled={false}>
  <SearchInput
    id="WithControlledValue"
    label="Search input label"
    placeholder="Search input placeholder"
  />
</ADADesignProvider>

#### Example usage:

```jsx
import React from 'react';
import { SearchInput } from 'ada-design';

const SomeComponent = () => {
  return <SearchInput id="WithControlledValue" label="Search input label" placeholder="Search input placeholder" />;
};
```

### `<SearchInput />` with custom design

You can use our standard designs or customize it to be in the way you want; using nested selectors with the `className` prop or `styled-components`. In order to customize it, please take a look at [Customize components styling](../advanced/customize-component-styling)

#### Example:

```jsx
import React from 'react';
import styled from 'styled-components';
import { SearchInput } from 'ada-design';

const SomeComponent = () => {
  return <SearchInput id="WithControlledValue" label="Search input label" placeholder="Search input placeholder" />;
};

const StyledSearchInput = styled(SearchInput)`
  input {
    background-color: red;
  }

  label {
    color: blue;
  }
`;
```

#### SearchInput Props

| Props                     | Optional | Type                          | Description                                                  |
| ------------------------- | -------- | ----------------------------- | ------------------------------------------------------------ |
| `id`                      | No       | `string`                      | Text input ID                                                |
| `isRequired`              | Yes      | `boolean`                     | Value that indicates if the text input is required or not    |
| `isDisabled`              | Yes      | `boolean`                     | Value that indicates if the text input is disabled or not    |
| `isInvalid`               | Yes      | `boolean`                     | Value that indicates if the text input is invalid or not     |
| `width`                   | Yes      | [UnitValue](types/unit-value) | Value that indicates the input width                         |
| `height`                  | Yes      | [UnitValue](types/unit-value) | Value that indicates the input height                        |
| `shouldHideLabel`         | Yes      | `boolean`                     | If `true` it will not render the label                       |
| `shouldVisuallyHideLabel` | Yes      | `boolean`                     | If `true` it will not show (visually) the label              |
| `label`                   | Yes      | `string`                      | String value that will be used as `label` or `labelled-by`   |
| `placeholder`             | Yes      | `string`                      | String value that will be used as `placeholder`              |
| `labelledBy`              | Yes      | `string`                      | String value that represents the `labelled-by` property      |
| `value`                   | No       | `string`                      | String value that represents the current input current value |
| `onChange`                | No       | `(e) => void`                 | Function that will be called when the input's value change   |

:::note
The `SearchInput` component is one of the exceptions that doesn't allow [`View`](view) props by default. You can wrap it using [`View`](view) or [`Flex`](flex) in order to arrange it or use `styled-components` to style it.
:::
