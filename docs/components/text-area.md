---
id: text-area
title: TextArea
sidebar_label: TextArea
---

### `<TextArea/>`

Description to be done.

#### Preview:

import { TextArea } from "ada-design";

<TextArea
id="description"
label="Description"
placeholder="Enter all the description you want"
value=""
onChange={(e) => { }}
/>

#### Example usage:

```jsx
import React from 'react';
import { TextArea } from 'ada-design';

const SomeComponent = () => {
  return (
    <TextArea
      id="description"
      label="Description"
      placeholder="Enter all the description you want"
      value={value}
      onChange={(e) => {}}
    />
  );
};
```

### `<TextArea />` with custom design

You can use our standard designs or customize it to be in the way you want; using nested selectors with the `className` prop or `styled-components`. In order to customize it, please take a look at [Customize components styling](../advanced/customize-component-styling)

#### Example:

```jsx
import React from 'react';
import styled from 'yup';
import { TextArea } from 'ada-design';

const SomeComponent = () => {
  return (
    <TextArea
      id="description"
      label="Description"
      placeholder="Enter all the description you want"
      value={value}
      onChange={(e) => {}}
    />
  );
};

const StyledTextArea = styled(TextArea)`
  textarea {
    background-color: red;
  }

  label {
    color: blue;
  }
`;
```

#### TextArea Props

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
The `TextArea` component is one of the exceptions that doesn't allow [`View`](view) props by default. You can wrap it using [`View`](view) or [`Flex`](flex) in order to arrange it or use `styled-components` to style it.
:::
