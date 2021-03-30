---
id: ada-design-provider
title: ADADesignProvider
sidebar_label: ADADesignProvider
---

:::caution
[**ADA Design**](https://adadesign.io/) is in early development, and some things may change before we hit production version. This project is a work-in-progress.
:::

### `<ADADesignProvider/>`

Rendering a `<ADADesignProvider>` will allow you to take advantage of the **ADA analysis** we developed. The `ADADesignProvider` **MUST** be the wrapper for all the application that are going to be using the the [**ADA Design**](https://adadesign.io/) components -- both for accessibility and for design theming.

In order to enable the accesibility analysis, we need to provide the `isEnabled` property in order to indicate if the accessibility analysis should be done or not.

Example usage:

```jsx
import React from 'react';
import { ADADesignProvider } from 'ada-design';

const AppRoot = () => {
  return (
    <ADADesignProvider isEnabled={true}>{/* Code that will be able to use the ADA Design library */}</ADADesignProvider>
  );
};
```

:::important
Even though `ada-design` provides a really cool ADA analysis feature, we recommend you to enable it only for the development environment; otherwise, your users are going to be able to see the analysis as well.
:::

So, we recommend you to create a `utils` function aiming to return a `boolean` value that indicates if your project is running in a `development` or `production` environment; with that, you can use it to enable/disable the `ADADesignProvider`.

```jsx
import React from 'react';
import { ADADesignProvider } from 'ada-design';

const isDev = () => {
  return !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
};

const AppRoot = () => {
  return (
    <ADADesignProvider isEnabled={isDev()}>
      {/* Code that will be able to use the ADA Design library */}
    </ADADesignProvider>
  );
};
```

### Custom Theming

[**ADA Design**](https://adadesign.io/) also provides you a default design theme in order to set all the colors/styles used by the library. You can use the default ones or use the `value` prop in order to overwrite the ones you want.

Example where we're overwritting the text default color:

```tsx
import React from 'react';
import { ADADesignProvider } from 'ada-design';

const AppRoot = () => {
  return (
    <ADADesignProvider
      isEnabled={true}
      value={{
        colors: {
          text: {
            textDefault: 'red',
          },
        },
      }}
    >
      {/* Code that will be able to use the ADA Design library */}
    </ADADesignProvider>
  );
};
```

It's important to notice that all these theme properties will be available through the `useTheme` hooks and also inside any `styled-component`;

```tsx
const {
  colors: { palette },
} = useTheme();

// or

const MyStyledComponent = styled(View)`
  color: ${({ theme }) => theme.colors.text.textDefault};
`;
```

:::info
You can check all the already defined theme properties on the following page: [Default Theme](types/default-theme)
::::

#### ADADesignProvider Props

| Props                  | Optional | Type                                         | Description                                                      |
| ---------------------- | -------- | -------------------------------------------- | ---------------------------------------------------------------- |
| `isEnabled`            | No       | `boolean`                                    | Enable/Disable accessibility analysis                            |
| `value`                | Yes      | Partial<[DefaultTheme](types/default-theme)> | Overwrite the defaults properties set for the theme              |
| `shouldShowSuccess`    | Yes      | `boolean`                                    | (Default = true) Enable/Disable warnings for success analysis    |
| `shouldShowIncomplete` | Yes      | `boolean`                                    | (Default = true) Enable/Disable warnings for incomplete analysis |
