---
id: add-to-your-project
title: Add to your project
sidebar_label: Add to your project
---

## Getting started with example projects

We developed two sample projects for you using the [**ADA Design**](https://adadesign.io/) UI-Kit. So feel free to clone it and start working

- [JavaScript Repository](https://github.com/aimbly/ada-design-example)
- [TypeScript Repository](https://github.com/aimbly/ada-design-typescript-example)

Or you can install it in your existing project following the below section.

## Install to your existing project

[**ADA Design**](https://adadesign.io/) provides you several components and features that you can import and use in your project -- you don't need to use all of them, only the ones that you feel necessary. To start using it, you only need to follow the following:

```bash
yarn add ada-design
# or
npm install --save ada-design
```

:::caution
`ada-design` implements at the top of [Styled Components](https://styled-components.com/), so we highly recommend using it -- even though is not mandatory.
:::

Assuming that you are using a [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) application, you can have a working example doing something like this:

```jsx
import React from 'react';
import { Button, ADADesignProvider } from 'ada-design';

const App = () => {
  return (
    <ADADesignProvider isEnabled={true}>
      <Button>I am using the ADA Design Button 🌮</Button>
    </ADADesignProvider>
  );
};
```

Where the [`ADADesignProvider`](components/ada-design-provider) **MUST** be the wrapper of all the components that might be analysed or that might be using any [**ADA Design**](https://adadesign.io/) component (_we recommend to wrap all the application with it_) -- we need to provide the `isEnabled` property in order to indicate if the accessibility analysis should be done or not (_we recommend to enable it only for development environment_);

## Problems?

Ask for help on our [GitHub repository](https://github.com/aimbly/ada-design).
