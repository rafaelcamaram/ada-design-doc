---
id: customize-component-styling
title: Customize components styling
sidebar_label: Customize components styling
---

By default, [**ADA Design**](https://adadesign.io) provides you an already awesome built-in component design to build your projects but we also wanted to allow you to customize them in the best way possible; in order to match perflectly with your requirements.

Thinking about it, you can style the [**ADA Design**](https://adadesign.io) components in three different ways:

:::note
We are using the `Button` component in order to explain how to customize your components, but the same thing applies to all the other [**ADA Design**](https://adadesign.io) components.
:::

### Using the ADA design system props

As you might be noticed reading the other doc pages, we built our components on the top of [`View`](../components/view) component. So, you can use all its `props` in order to customize it.

#### Example:

```jsx
import { Button } from 'ada-design';

<Button
  className="my-awesome-button"
  size={32}
  variant="primary"
  intention="default"
  onClick={() => {}}
  margin={10}
  width="100%"
  background="red"
>
  Button with props
</Button>;
```

### Using `classNames`

If you're using regular `css` files or using some pre-processors like `scss`, this approach will fit perfectly for you. You can use the `className` property in order to append one or more class names to our components and use it to customize it.

#### Example:

```jsx
// Javascript file
import { Button } from 'ada-design';

<Button className="my-awesome-button" size={32} variant="primary" intention="default" onClick={() => {}}>
  Button with class names
</Button>;
```

```css
/* CSS File */
.my-awesome-button {
  width: 100%;
  margin: 10px;
  background: red;
}
```

### Using `styled-components`

As we already mentioned before, the [**ADA Design**](https://adadesign.io) components were built on top of `styled-components`; so you can also use it in order to customize our elements.

```jsx
import { styled } from 'styled-components';
import { Button } from 'ada-design';

<StyledButton size={32} variant="primary" intention="default" onClick={() => {}}>
  Button with styled-components
</StyledButton>;

const StyledButton = styled(Button)`
  width: 100%;
  margin: 10px;
  background: red;
`;
```
