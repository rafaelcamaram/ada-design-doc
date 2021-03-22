---
id: mdx
title: Powered by MDX
---

You can write JSX and use React components within your Markdown thanks to [MDX](https://mdxjs.com/).

import { Button } from 'ada-design';

export const Highlight = ({children, color}) => ( <Button variant="primary">{children}</Button> );

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!
