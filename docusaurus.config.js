// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'StarLand Wiki',
  tagline: '一个特别专注的文档 ?',
  url: 'https://wiki.mc233.fun/',
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'StarLand Wiki',
        logo: {
          alt: 'StarLand Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'welcome',
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
                to: '/docs/welcome',
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
          {
            title: '交流',
            items: [
              {
                label: 'QQ群',
                href: 'https://qm.qq.com/q/fpNjRd3Wpi',
              },
              // {
              //   label: '论坛',
              //   href: 'https://zitbbs.com',
              // },
              {
                label: 'BiliBili',
                href: 'https://www.bilibili.com/video/BV1GJ411x7h7/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SnowyMC. | All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

};

module.exports = config;
