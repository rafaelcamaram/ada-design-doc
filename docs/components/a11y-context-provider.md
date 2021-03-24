---
id: a11y-context-provider
title: A11yContextProvider
sidebar_label: A11yContextProvider
---

:::caution
[**ADA Design**](https://adadesign.io/) is in early development, and some things may change before we hit production version. This project is a work-in-progress.
:::

### `<A11yContextProvider/>`

Rendering a `<A11yContextProvider>` will allow you to take advantage of the **ADA analysis** we developed. The `A11yContextProvider` should be the wrapper for all the components that might be analyzed (_we recommend wrapping all the application with it_).

In order to enable it, we need to provide the `isEnabled` property in order to indicate if the accessibility analysis should be done or not.

Example usage:

```jsx
import React from 'react';
import { A11yContextProvider } from 'ada-design';

const AppRoot = () => {
  return (
    <A11yContextProvider isEnabled={true}>{/* Code that will be able to use the ADA analysis */}</A11yContextProvider>
  );
};
```

:::important
Even though `ada-design` provides a really cool ADA analysis feature, we recommend you to enable it only for the development environment; otherwise, your users are going to be able to see the analysis as well.
:::

So, we recommend you to create a `utils` function aiming to return a `boolean` value that indicates if your project is running in a `development` or `production` environment; with that, you can use it to enable/disable the `A11yContextProvider`.

```jsx
import React from 'react';
import { A11yContextProvider } from 'ada-design';

const isDev = () => {
  return !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
};

const AppRoot = () => {
  return (
    <A11yContextProvider isEnabled={isDev()}>
      {/* Code that will be able to use the ADA analysis */}
    </A11yContextProvider>
  );
};
```

#### A11yContextProvider Props

| Props       | Optional | Type      | Description                           |
| ----------- | -------- | --------- | ------------------------------------- |
| `isEnabled` | Yes      | `boolean` | Enable/Disable accessibility analysis |
