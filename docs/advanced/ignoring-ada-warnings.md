---
id: ignoring-ada-warnings
title: Ignoring ADA warnings
sidebar_label: Ignoring ADA warnings
---

By default, we are used to displaying all the possible ADA warnings for you -- since we want you to take all the possible advantages of our library. But, it is also possible to disable some of them in order to render your UI a little bit more cleaner.

import adaAnalisysPreviewImage from '../../static/img/ada-analisys-preview.png';

<img src={adaAnalisysPreviewImage} alt="Screenshot of the React website and the ADA Design library elements pointing the accessibility issues" />

### Disable for all the project

You can disable the warnings for all the project by setting the `shouldShowSuccess` and/or `shouldShowIncomplete` prop to the `A11yContextProvider` component.

```jsx
import React from 'react';
import { A11yContextProvider } from 'ada-design';

const AppRoot = () => {
  return (
    <A11yContextProvider isEnabled={true} shouldShowSuccess={false} shouldShowIncomplete={false}>
      {/* Code that will be able to use the ADA analysis */}
    </A11yContextProvider>
  );
};
```

### Disable for a specific component instance

Or, you can use the same props (`shouldShowSuccess` and/or `shouldShowIncomplete`) but for a specific component in order to disable the warnings only for it.

```jsx
import React from 'react';
import { Button } from 'ada-design';

const AnyComponent = () => {
  return (
    <Button shouldShowSuccess={false} shouldShowIncomplete={shouldShowIncomplete} variant="primary" onClick={() => {}}>
      Default Button
    </Button>
  );
};
```

:::note
It is also important to notice that even setting `shouldShowSuccess` and/or `shouldShowIncomplete` in the `A11yContextProvider` (_for all the project_), using these same props at a component-level will overwrite the settings at project-level
:::
