module.exports = {
  title: 'ADA Design',
  tagline: 'React UI Component Library focused on accessibility',
  url: 'https://aimbly.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'aimbly',
  projectName: 'ada-design-doc',
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'ADA Design Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/getting-started',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/components/ada-design-provider',
          activeBasePath: 'docs',
          label: 'Components API',
          position: 'left',
        },
        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/aimbly/ada-design',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    colorMode: {
      // Nothing against dark mode, but our current CSS doesn't have high contrast
      // so it needs some work before being enabled.
      defaultMode: 'light',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              to: 'docs/getting-started',
              activeBasePath: 'docs',
              label: 'Docs',
              position: 'left',
            },
            {
              to: 'docs/components/ada-design-provider',
              activeBasePath: 'docs',
              label: 'Components API',
              position: 'left',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            // { to: 'blog', label: 'Blog', position: 'left' }
          ],
        },
        {
          title: 'More',
          items: [
            {
              href: 'https://github.com/aimbly/ada-design',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aimbly.`,
    },
  },
  stylesheets: ['https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
