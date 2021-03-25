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
import { Button, A11yContextProvider } from 'ada-design';

const App = () => {
  return (
    <A11yContextProvider isEnabled={true}>
      <Button>I'm using the ADA Design Button 🌮</Button>
    </A11yContextProvider>
  );
};
```

Where the [`A11yContextProvider`](components/a11y-context-provider) should be the wrapper of all the components that might be analysed (_we recommend to wrap all the application with it_) and we need to provide the `isEnabled` property in order to indicate if the accessibility analysis should be done or not (_we recommend to enable it only for development environment_);

## Getting started with an example project

If you don't have an existing project yet, you can use our example project repository in order to bootstrap your application.

```bash
git clone https://github.com/aimbly/ada-design-example.git
# or
git clone git@github.com:aimbly/ada-design-example.git
```

```bash
# install dependencies
yarn install

# run the project
yarn start
```

## Problems?

Ask for help on our [GitHub repository](https://github.com/aimbly/ada-design).
