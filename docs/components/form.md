---
id: form
title: Form
sidebar_label: Form
---

### `<Form/>`

:::info
We are providing you this `Form` component as a straightforward way to build **simple** forms but it's not that flexible. In the future, we are going to provide you a better component to attend more use cases.
:::

In order to provide you a better and fast-forward way to handle forms, we created the `Form` component. It's basically a component that only requires you to provide the form schema and the validation schema, with that, it'll render all the form for you; without needing to worry about managing the state or anything else.

#### Example usage:

```jsx
import React from 'react';
import * as Yup from 'yup';
import { Form } from 'ada-design';

const schema = [
  {
    id: 'firstName',
    label: 'First Name',
    type: 'string',
    isRequired: true,
    placeholder: 'Example: John',
  },
  {
    id: 'lastName',
    label: 'Last Name',
    isRequired: false,
    placeholder: 'Example: Doe',
  },
];

const SomeComponent = () => {
  return (
    <Form
      schema={schema}
      validationSchema={Yup.object().shape({
        firstName: Yup.string(),
        lastName: Yup.string().required(),
      })}
      onSubmit={(values) => {
        alert('You can get the submitted values here');
      }}
    />
  );
};
```

:::important
In order to provide you a better experience, we're using the third-party `yup` library in order to handle the form field validations. Thinking about this, we require you to pass a `yup` object to the `validationSchema` prop
:::

#### Form Props

| Props              | Optional | Type                              | Description                                                   |
| ------------------ | -------- | --------------------------------- | ------------------------------------------------------------- |
| `schema`           | No       | [`FormSchema`](types/form-schema) | An array of objects that represents all the form fields       |
| `onSubmit`         | No       | `(values) => void`                | `Function` executed when the form is valid and it's submitted |
| `validationSchema` | Yes      | `Yup.AnySchema`                   | `yup` validation schema that represents the form fields       |

:::note
The `Form` component is one of the exceptions that doesn't allow [`View`](view) props by default. In the future, it'll allow you to receive `children` and render your own fields
:::
