---
id: form-schema
title: FormSchema
sidebar_label: FormSchema
---

:::caution
This page is still being written. It'll be done soon.
:::

```tsx
type Field = {
  id: string;
  label?: string;
  type?: string;
  isRequired?: boolean;
  placeholder?: string;
  shouldHideLabel?: boolean;
  shouldVisuallyHideLabel?: boolean;
  labelledBy?: string;
};

type FormSchema = Fields[];
```
