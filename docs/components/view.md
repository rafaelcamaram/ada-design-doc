---
id: view
title: View
sidebar_label: View
---

### `<View/>`

You can consider the `View` component as a wildcard, since it is the base component for all other components of **ADA Design**; therefore, you will be able to take advantage of all your `props` in other components.

It is worth remembering that the `View` component originally does not have any visual effects, it's usually used to wrap other components and arrange them; however, it can be used/customized (using `props` or `styled-components`) in several ways to achieve the desired look. We can consider that it acts in a similar way to a `div` that can be mutated to be rendered like any other element (` p`, `div`,`h1`, etc...)

Example usage:

```jsx
import React from 'react';
import { View } from 'ada-design';

const SomeComponent = () => {
  return (
    <>
      <View />

      <View>{/* Some other components to be arranged */}</View>

      <View marginTop={10} marginX={5} backgroundColor="#FEFEFE">
        {/* Some other components to be arranged */}
      </View>
    </>
  );
};
```

### `<View />` with custom design

You can use our standard designs or customize it to be in the way you want. In order to customize it, please take a look at [Customize components styling](../advanced/customize-component-styling)

#### View Props

:::tip
It's important to notice that all these props can be used with any component from **ADA Design**.
:::

| Props                      | Optional | Type                                            | Description                                             |
| -------------------------- | -------- | ----------------------------------------------- | ------------------------------------------------------- |
| `className`                | Yes      | `string`                                        | Class names that will be appended to the class property |
| `color`                    | Yes      | `string`                                        | Text color                                              |
| `width`                    | Yes      | `UnitValue`                                     | Element width                                           |
| `height`                   | Yes      | `UnitValue`                                     | Element height                                          |
| `maxHeight`                | Yes      | `UnitValue`                                     | Element max height                                      |
| `maxWidth`                 | Yes      | `UnitValue`                                     | Element max width                                       |
| `minHeight`                | Yes      | `UnitValue`                                     | Element min height                                      |
| `minWidth`                 | Yes      | `UnitValue`                                     | Element min width                                       |
| `alignContent`             | Yes      | `MainAxisFlexDefaultValue`                      | TBD                                                     |
| `alignItems`               | Yes      | `CrossAxisFlexDefaultValue`                     | TBD                                                     |
| `alignSelf`                | Yes      | `CrossAxisFlexDefaultValue`                     | TBD                                                     |
| `background`               | Yes      | `string`                                        | TBD                                                     |
| `mixBlendMode`             | Yes      | `BlendModeValue`                                | TBD                                                     |
| `backgroundClip`           | Yes      | `"border-box", "padding-box", "content-box"`    | TBD                                                     |
| `backgroundColor`          | Yes      | `string`                                        | TBD                                                     |
| `backgroundImage`          | Yes      | `string`                                        | TBD                                                     |
| `backgroundOrigin`         | Yes      | `string`                                        | TBD                                                     |
| `backgroundPosition`       | Yes      | `string`                                        | TBD                                                     |
| `backgroundRepeat`         | Yes      | `"repeat", "repeat-x", "repeat-y", "no-repeat"` | TBD                                                     |
| `backgroundSize`           | Yes      | `string`                                        | TBD                                                     |
| `border`                   | Yes      | `string`                                        | TBD                                                     |
| `borderBottom`             | Yes      | `string`                                        | TBD                                                     |
| `borderBottomColor`        | Yes      | `string`                                        | TBD                                                     |
| `borderBottomLeftRadius`   | Yes      | `UnitValue`                                     | TBD                                                     |
| `borderBottomRightRadius`  | Yes      | `UnitValue`                                     | TBD                                                     |
| `borderBottomStyle`        | Yes      | `BorderStyleValue`                              | TBD                                                     |
| `borderBottomWidth`        | Yes      | `UnitValue`                                     | TBD                                                     |
| `borderColor`              | Yes      | `any`                                           | TBD                                                     |
| `borderLeft`               | Yes      | `any`                                           | TBD                                                     |
| `borderLeftColor`          | Yes      | `any`                                           | TBD                                                     |
| `borderLeftStyle`          | Yes      | `any`                                           | TBD                                                     |
| `borderLeftWidth`          | Yes      | `any`                                           | TBD                                                     |
| `borderRadius`             | Yes      | `any`                                           | TBD                                                     |
| `borderRight`              | Yes      | `any`                                           | TBD                                                     |
| `borderRightColor`         | Yes      | `any`                                           | TBD                                                     |
| `borderRightStyle`         | Yes      | `any`                                           | TBD                                                     |
| `borderRightWidth`         | Yes      | `any`                                           | TBD                                                     |
| `borderStyle`              | Yes      | `any`                                           | TBD                                                     |
| `borderTop`                | Yes      | `any`                                           | TBD                                                     |
| `borderTopColor`           | Yes      | `any`                                           | TBD                                                     |
| `borderTopLeftRadius`      | Yes      | `any`                                           | TBD                                                     |
| `borderTopRightRadius`     | Yes      | `any`                                           | TBD                                                     |
| `borderTopStyle`           | Yes      | `any`                                           | TBD                                                     |
| `borderTopWidth`           | Yes      | `any`                                           | TBD                                                     |
| `borderWidth`              | Yes      | `any`                                           | TBD                                                     |
| `bottom`                   | Yes      | `any`                                           | TBD                                                     |
| `boxShadow`                | Yes      | `any`                                           | TBD                                                     |
| `boxSizing`                | Yes      | `any`                                           | TBD                                                     |
| `clear`                    | Yes      | `any`                                           | TBD                                                     |
| `color`                    | Yes      | `any`                                           | TBD                                                     |
| `cursor`                   | Yes      | `any`                                           | TBD                                                     |
| `display`                  | Yes      | `any`                                           | TBD                                                     |
| `flex`                     | Yes      | `any`                                           | TBD                                                     |
| `flexBasis`                | Yes      | `any`                                           | TBD                                                     |
| `flexDirection`            | Yes      | `any`                                           | TBD                                                     |
| `flexFlow`                 | Yes      | `any`                                           | TBD                                                     |
| `flexGrow`                 | Yes      | `any`                                           | TBD                                                     |
| `flexShrink`               | Yes      | `any`                                           | TBD                                                     |
| `flexWrap`                 | Yes      | `any`                                           | TBD                                                     |
| `float`                    | Yes      | `any`                                           | TBD                                                     |
| `font`                     | Yes      | `any`                                           | TBD                                                     |
| `fontFamily`               | Yes      | `any`                                           | TBD                                                     |
| `fontSize`                 | Yes      | `any`                                           | TBD                                                     |
| `fontStyle`                | Yes      | `any`                                           | TBD                                                     |
| `fontVariant`              | Yes      | `any`                                           | TBD                                                     |
| `fontWeight`               | Yes      | `any`                                           | TBD                                                     |
| `height`                   | Yes      | `any`                                           | TBD                                                     |
| `justifyContent`           | Yes      | `any`                                           | TBD                                                     |
| `justifyItems`             | Yes      | `any`                                           | TBD                                                     |
| `justifySelf`              | Yes      | `any`                                           | TBD                                                     |
| `left`                     | Yes      | `any`                                           | TBD                                                     |
| `letterSpacing`            | Yes      | `any`                                           | TBD                                                     |
| `lineHeight`               | Yes      | `any`                                           | TBD                                                     |
| `margin`                   | Yes      | `any`                                           | TBD                                                     |
| `marginBottom`             | Yes      | `any`                                           | TBD                                                     |
| `marginLeft`               | Yes      | `any`                                           | TBD                                                     |
| `marginRight`              | Yes      | `any`                                           | TBD                                                     |
| `marginTop`                | Yes      | `any`                                           | TBD                                                     |
| `marginX`                  | Yes      | `any`                                           | TBD                                                     |
| `marginY`                  | Yes      | `any`                                           | TBD                                                     |
| `opacity`                  | Yes      | `any`                                           | TBD                                                     |
| `order`                    | Yes      | `any`                                           | TBD                                                     |
| `outline`                  | Yes      | `any`                                           | TBD                                                     |
| `overflow`                 | Yes      | `any`                                           | TBD                                                     |
| `overflowX`                | Yes      | `any`                                           | TBD                                                     |
| `overflowY`                | Yes      | `any`                                           | TBD                                                     |
| `padding`                  | Yes      | `any`                                           | TBD                                                     |
| `paddingBottom`            | Yes      | `any`                                           | TBD                                                     |
| `paddingLeft`              | Yes      | `any`                                           | TBD                                                     |
| `paddingRight`             | Yes      | `any`                                           | TBD                                                     |
| `paddingTop`               | Yes      | `any`                                           | TBD                                                     |
| `paddingX `                | Yes      | `any`                                           | TBD                                                     |
| `paddingY `                | Yes      | `any`                                           | TBD                                                     |
| `position`                 | Yes      | `any`                                           | TBD                                                     |
| `right`                    | Yes      | `any`                                           | TBD                                                     |
| `textAlign`                | Yes      | `any`                                           | TBD                                                     |
| `textDecoration`           | Yes      | `any`                                           | TBD                                                     |
| `textOverflow`             | Yes      | `any`                                           | TBD                                                     |
| `textShadow`               | Yes      | `any`                                           | TBD                                                     |
| `textTransform`            | Yes      | `any`                                           | TBD                                                     |
| `top`                      | Yes      | `any`                                           | TBD                                                     |
| `transform`                | Yes      | `any`                                           | TBD                                                     |
| `transformOrigin`          | Yes      | `any`                                           | TBD                                                     |
| `transition`               | Yes      | `any`                                           | TBD                                                     |
| `transitionDelay`          | Yes      | `any`                                           | TBD                                                     |
| `transitionDuration`       | Yes      | `any`                                           | TBD                                                     |
| `transitionProperty`       | Yes      | `any`                                           | TBD                                                     |
| `transitionTimingFunction` | Yes      | `any`                                           | TBD                                                     |
| `verticalAlign`            | Yes      | `any`                                           | TBD                                                     |
| `visibility`               | Yes      | `any`                                           | TBD                                                     |
| `whiteSpace`               | Yes      | `any`                                           | TBD                                                     |
| `wordWrap`                 | Yes      | `any`                                           | TBD                                                     |
| `zIndex`                   | Yes      | `any`                                           | TBD                                                     |

### To be implemented

- columnGap
- gap
- grid
- gridArea
- gridAutoColumns
- gridAutoFlow
- gridAutoRows
- gridColumn
- gridColumnEnd
- gridColumnGap
- gridColumnStart
- gridGap
- gridRow
- gridRowEnd
- gridRowGap
- gridRowStart
- gridTemplate
- gridTemplateAreas
- gridTemplateColumns
- gridTemplateRows
- listStyle
- listStyleImage
- listStylePosition
- listStyleType
- placeContent
- placeItems
- placeSelf
- pointerEvents
- resize
- rowGap
- userSelect
- wordBreak
