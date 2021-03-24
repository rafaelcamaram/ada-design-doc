---
id: analyze-your-own-components
title: Analyze your own components
sidebar_label: Analyze your own components
---

We do believe that our component's library will save you a considerable amount of time, making your project even more beautiful, accessible and professional but, we also know that you are going to want to use your own components - the ones you built -. Thinking about this, we developed a way that you can use our component _API_ in order to allow our library to make an accessibility analysis of your component as well.

import tooltipPreviewImage from '../../static/img/preview-tooltip.png';

<img src={tooltipPreviewImage} alt="Tooltip with a random result of accessibility analisys"/>

#### JavaScript Example:

```tsx
import { withAccessibilityErrors } from 'ada-design';

const YourOwnComponent = (props) => {
  // Implementation
};

const YourOwnComponentWithAnalyzeFeature = withAccessibilityErrors(Button);

// So you can use your component in the same way you were using before, but with the new name
<YourOwnComponentWithAnalyzeFeature />;
```

#### TypeScript Example:

```tsx
import { withAccessibilityErrors } from 'ada-design';

type YourOwnComponentProps = {
  // Props
};

const YourOwnComponent: React.FC<YourOwnComponentProps> = (props) => {
  // Implementation
};

const YourOwnComponentWithAnalyzeFeature = withAccessibilityErrors<YourOwnComponentProps>(Button);

// So you can use your component in the same way you were using before, but with the new name
<YourOwnComponentWithAnalyzeFeature />;
```
