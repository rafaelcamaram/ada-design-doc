---
id: text-input
title: TextInput
sidebar_label: TextInput
---

### `<TextInput/>`

Description to be done.

#### Preview:

import { TextInput } from "ada-design";

<TextInput
id="firstName"
label="First Name"
placeholder="Enter your first name"
value=""
onChange={(e) => { }}
/>

#### Example usage:

```jsx
import React from 'react';
import * as Yup from 'yup';
import { TextInput } from 'ada-design';

const SomeComponent = () => {
  return (
    <TextInput
      id="firstName"
      label="First Name"
      placeholder="Enter your first name"
      value={value}
      onChange={(e) => {}}
    />
  );
};
```

#### TextInput Props

| Props                     | Optional | Type          | Description                                                  |
| ------------------------- | -------- | ------------- | ------------------------------------------------------------ |
| `id`                      | No       | `string`      | Text input ID                                                |
| `isRequired`              | Yes      | `boolean`     | Value that indicates if the text input is required or not    |
| `shouldHideLabel`         | Yes      | `boolean`     | If `true` it will not render the label                       |
| `shouldVisuallyHideLabel` | Yes      | `boolean`     | If `true` it will not show (visually) the label              |
| `label`                   | Yes      | `string`      | String value that will be used as `label` or `labelled-by`   |
| `placeholder`             | Yes      | `string`      | String value that will be used as `placeholder`              |
| `labelledBy`              | Yes      | `string`      | String value that represents the `labelled-by` property      |
| `value`                   | No       | `string`      | String value that represents the current input current value |
| `onChange`                | No       | `(e) => void` | Function that will be called when the input's value change   |

:::note
The `TextInput` component is one of the exceptions that doesn't allow [`View`](view) props by default. You can wrap it using [`View`](view) or [`Flex`](flex) in order to arrange it or use `styled-components` to style it.
:::
