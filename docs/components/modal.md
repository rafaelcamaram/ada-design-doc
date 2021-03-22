---
id: modal
title: Modal
sidebar_label: Modal
---

### `<Modal/>`

#### Default Modal

Using the `<Modal>`, you will be able to show content on top of an overlay layer. It's really useful when you don't want to open a new page without breaking the user's workflow.

Example usage:

```jsx
import React, { useState } from 'react';
import { Modal, Button } from 'ada-design';

const SomeComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setIsVisible(true)}>Open Default Modal</Button>

      <Modal variant="default" isOpen={isVisible} closeModal={() => setIsVisible(false)}>
        <Text>Some random content</Text>
        <Button isFullWidth onClick={() => setIsVisible(false)}>
          Close
        </Button>
      </Modal>
    </>
  );
};
```

#### Trail Modal

You can also count with the `Trail` variant that works pretty much in the same way but it comes from the bottom of the screen.

Example usage:

```jsx
import React, { useState } from 'react';
import { Modal, Button } from 'ada-design';

const SomeComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setIsVisible(true)}>Open Trail Modal</Button>

      <Modal variant="trail" isOpen={isVisible} closeModal={() => setIsVisible(false)}>
        <Text>Some random content</Text>
        <Button isFullWidth onClick={() => setIsVisible(false)}>
          Close
        </Button>
      </Modal>
    </>
  );
};
```

#### Modal Props

| Props              | Optional | Type                   | Description                                              |
| ------------------ | -------- | ---------------------- | -------------------------------------------------------- |
| `isOpen`           | Yes      | `boolean`              | Show or not the `Modal` with its content                 |
| `closeModal`       | Yes      | `() => void`           | Close the `Modal` when it's called                       |
| `variant`          | Yes      | `'default' or 'trail'` | Determine the `Modal` style/behavior                     |
| `customModalStyle` | Yes      | `Partial<ModalStyle>`  | Set custom design style to the `Modal` container/content |

#### ModalStyle type

As you can see in the previous table, you can customize the `Modal` content/container using the `customModalStyle` prop. It's basically a JavaScript object that contains two properties that can receive [`ViewElementProps`](view.html) properties:

- `container`: Responsible to style the overlay layer (the one behind the content);
- `content`: Responsible to style the content area;

```ts
type ModalStyle = {
  container: Partial<ViewElementProps>;
  content: Partial<ViewElementProps>;
};

// Example of `customModalStyle`

const myOwnCustomModalStyle = {
  container: {
    backgroundColor: '#00000040',
    display: flex,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    padding: 16,
  },
};
```

:::note
It's important to notice that if you're trying to use the `customModalStyle`, you need to be aware that the default styling properties (the ones that came from `variant`) will still be applied; so you need to overwrite the ones you want in the `customModalStyle` object
:::

:::note
The `Modal` component is one of the exceptions that doesn't allow [`View`](view.html) props by default. You need to use the `customModalStyle` prop to style it
:::
