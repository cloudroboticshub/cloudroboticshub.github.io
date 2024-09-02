import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Cloud Robotics Hub',
  tagline: 'Gathering information about Cloud Robotics for use by everyone.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cloudroboticshub.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cloudroboticshub', // Usually your GitHub org/user name.
  projectName: 'cloudroboticshub.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: "G-W07RNQP7NT",
          anonymizeIP: true,
        }
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Cloud Robotics Hub',
      logo: {
        alt: 'Cloud Robotics Hub Logo',
        src: 'img/logo.png',
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/meetings', label: 'Meetings', position: 'left'},
        {to: '/resources', label: 'Resources', position: 'left'},
        {to: '/survey', label: 'State of Cloud Robotics', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'ROS Discourse',
              href: 'https://discourse.ros.org/tag/wg-cloud-robotics',
            },
            {
              label: 'Google Groups',
              href: 'https://groups.google.com/g/cloud-robotics-working-group-invites',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/cloudroboticshub/cloudroboticshub.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cloud Robotics Working Group. Built with Docusaurus.<br/>
      Credits: UXWing at https://uxwing.com - see <a href="https://uxwing.com/license/">license terms</a>.
      `,

    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
