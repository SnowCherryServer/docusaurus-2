// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'StarLand Wiki',
  tagline: '一个特别专注的文档 ?',
  url: 'https://wiki.mc233.fun',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SnowyMC', // Usually your GitHub org/user name.
  projectName: 'StarLand-Wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com//SnowCherryServer/docusaurus-2/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com//SnowCherryServer/docusaurus-2/edit/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  // plugins: [
  //   "plugin-image-zoom",
  // ],

  plugins: [
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
  [
    "@gracefullight/docusaurus-plugin-microsoft-clarity",
    { projectId: "oyfswsvfpc" },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'docs-java',
      path: 'docs-java',
      routeBasePath: 'Java',
      editUrl: 'https://github.com/8aka-Team/NitWikit/tree/main',
      sidebarPath: require.resolve('./sidebars.js'),
      editCurrentVersion: true,
      showLastUpdateAuthor: true,
      showLastUpdateTime: true,
    }],[
    '@docusaurus/plugin-pwa',
    {
      debug: true,
      offlineModeActivationStrategies: [
        'appInstalled',
        'standalone',
        'queryString',
      ],
      pwaHead: [
        {
          tagName: 'link',
          rel: 'icon',
          href: '/img/book.png',
        },
        {
          tagName: 'link',
          rel: 'manifest',
          href: '/manifest.json', // your PWA manifest
        },
        {
          tagName: 'meta',
          name: 'theme-color',
          content: 'rgb(37, 194, 160)',
        },
      ],
    },
  ],
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'docs-bedrock',
      path: 'docs-bedrock',
      routeBasePath: 'Bedrock',
      editUrl: 'https://github.com/postyizhan/NitWikit/tree/main',
      sidebarPath: require.resolve('./sidebars.js'),
      editCurrentVersion: true,
      showLastUpdateAuthor: true,
      showLastUpdateTime: true,
    },
  ],
],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'StarLand-Wiki',
        logo: {
          alt: 'StarLand Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'StarLand',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://qm.qq.com/q/fpNjRd3Wpi',
            label: 'QQ群',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: 'StarLand',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '交流',
            items: [
              {
                label: 'QQ群',
                href: 'https://qm.qq.com/q/fpNjRd3Wpi',
              },
              {
                label: '论坛',
                href: 'https://zitbbs.com',
              },
              {
                label: 'BiliBili',
                href: 'https://www.bilibili.com/video/BV1GJ411x7h7/',
              },
            ],
          },
          {
            title: '技术支持',
            items: [
              {
                label: 'Vercel',
                href: 'https://vercel.com/home'
              },
              {
                label: 'SnowCherry',
                href: 'https://github.com//SnowCherryServer',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 2024 SnowyMC. | All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),


    // imageZoom: {
    //   // CSS selector to apply the plugin to, defaults to '.markdown img'
    //   selector: '.markdown img',
    //   // Optional medium-zoom options
    //   // see: https://www.npmjs.com/package/medium-zoom#options
    //   options: {
    //     margin: 24,
    //     background: '#BADA55',
    //     scrollOffset: 0,
    //     container: '#zoom-container',
    //     template: '#zoom-template',
    //   },
    // },



};

module.exports = config;
