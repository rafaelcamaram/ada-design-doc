---
id: default-theme
title: DefaultTheme
sidebar_label: DefaultTheme
---

:::caution
This page is still being written. It'll be done soon.
:::

```tsx
export const defaultTheme: DefaultTheme = {
  fontSize: {
    xsmall: 11,
    small: 12,
    regular: 14,
    medium: 16,
    large: 20,
    xlarge: 24,
    xxlarge: 28,
    xxxlarge: 36,
  },
  colors: {
    buttons: {
      intentions: {
        textDefault: COLORS.agitatedBlue,
        backgroundDefault: COLORS.lochmara,
        textSuccess: COLORS.funGreen,
        backgroundSuccess: COLORS.jewel,
        textWarning: COLORS.rope,
        backgroundWarning: COLORS.gamboge,
        textDanger: COLORS.milanoRed,
        backgroundDanger: COLORS.alizarinCrimson,
      },
    },
    text: {
      textDefault: COLORS.agitatedBlue,
    },
    palette: {
      white: COLORS.white,
      black: COLORS.black,
      red: COLORS.milanoRed,
    },
    all: COLORS,
  },
};
```
