const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Daily Gotchas',
  tagline: 'The more you know',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'keatmin', // Usually your GitHub org/user name.
  projectName: 'daily gotchas', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    colorMode: {
      defaultMode: 'dark'
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      items: [
        {
          type: 'doc',
          docId: 'wiki_index',
          label: 'wiki',
          position: 'left',
        },
        {to: '/gotchas', label: 'gotchas', position: 'left'},
        {
          type: 'doc',
          docId: 'knowledge_index',
          label: 'knowledge',
          position: 'left',
          docsPluginId: 'knowledge'
        },
        {type: 'search', position: 'right'}
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'wiki',
          routeBasePath: 'wiki',
        },
        blog: {
          showReadingTime: true,
          path: 'gotchas',
          routeBasePath: 'gotchas'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'knowledge',
        path: 'knowledge',
        routeBasePath: 'knowledge',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],
};
