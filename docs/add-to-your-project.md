---
id: add-to-your-project
title: Add to your project
sidebar_label: Add to your project
---

## Install & Use

[**ADA Design**](https://rafaelcamaram.github.io/ada-design-doc/) provides you several components and features that you can import and use in your project -- you don't need to use all of them, only the ones that you feel necessary. To start using it, you only need to follow the following:

```sh
yarn add ada-design
# or
npm install --save ada-design
```

:::caution
`ada-design` implements at the top of [Styled Components](https://styled-components.com/), so we highly recommend using it -- even though is not mandatory.
:::

````

Assuming that you are using a [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) application, you can have a working example doing something like this:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, A11yContextProvider } from 'ada-design';

const App = () => {
  return (
    <A11yContextProvider isEnabled={true}>
      <Button>I'm using the ADA Design Button 🌮</Button>
    </A11yContextProvider>
  );
};
````

Where the `A11yContextProvider` should be wrapper all the components that might be analysed (_we recommend to wrap all the application with it_) and we need to provide the `isEnabled` property in order to indicate if the accessibility analysis should be done or not (_we recommend to enable it only for development environment_);
