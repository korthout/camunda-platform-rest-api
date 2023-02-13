// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Camunda Platform REST API",
  tagline: "Interact with Camunda Platform 8",
  url: "https://korthout.github.io",
  baseUrl: "/camunda-platform-rest-api",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "korthout", // Usually your GitHub org/user name.
  projectName: "camunda-platform-rest-api", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/korthout/camunda-platform-rest-api/tree/main/docs",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true
        }
      },
      navbar: {
        title: "Camunda Platform REST API",
        logo: {
          alt: "Logo",
          src: "img/logo-dark.png"
        },
        items: [
          {
            label: "Getting Started",
            type: "doc",
            docId: "guides/getting-started",
            position: "left"
          },
          {
            label: "API",
            position: "left",
            to: "/docs/api"
          },
          {
            label: "GitHub",
            href: "https://github.com/korthout/camunda-platform-rest-api",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/docs/guides/getting-started"
              },
              {
                label: "Connect to a cluster",
                to: "/docs/guides/connection"
              },
              {
                label: "Configuration",
                to: "/docs/guides/config"
              },
              {
                label: "API",
                to: "/docs/api"
              }
            ]
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub Issues",
                href: "https://github.com/korthout/camunda-platform-rest-api/issues"
              },
              {
                label: "Forum",
                href: "https://forum.camunda.io/"
              },
              {
                label: "Slack",
                href: "https://camunda-slack-invite.herokuapp.com/"
              }
            ]
          },
          {
            title: "Camunda SaaS",
            items: [
              {
                label: "Console",
                href: "https://camunda.io/"
              },
              {
                label: "Status",
                href: "https://status.camunda.io/"
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/korthout/camunda-platform-rest-api"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nico Korthout. Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["java"]
      },
      languageTabs: [
        {
            highlight: "bash",
            language: "curl",
            logoClass: "bash",
        },
        {
            highlight: "python",
            language: "python",
            logoClass: "python",
        },
        {
            highlight: "go",
            language: "go",
            logoClass: "go",
        },
        {
            highlight: "javascript",
            language: "nodejs",
            logoClass: "nodejs",
        },
        //{
        //  highlight: "ruby",
        //  language: "ruby",
        //  logoClass: "ruby",
        //},
        // {
        //     highlight: "csharp",
        //     language: "csharp",
        //     logoClass: "csharp",
        // },
        // {
        //   highlight: "php",
        //   language: "php",
        //   logoClass: "php",
        // },
    ],
    announcementBar: {
      id: "announcementBar_1", // Increment on change
      content:
        `📢 <strong>Public Beta</strong>: We want your <a href="https://forum.camunda.io/t/camunda-platform-rest-api-a-rest-api-for-camunda-platform-8/42610">feedback</a>! 📢
        &nbsp;&nbsp;&nbsp;
        🚧 <strong>Warning:</strong> This API is not yet stable - we might break backward compatibility in newer releases of <code>v0</code>. 🚧`,
    },
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          openapi: {
            specPath: "../openapi.yaml",
            outputDir: "docs/api",
            downloadUrl:
              "https://github.com/korthout/camunda-platform-rest-api/blob/main/openapi.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
              // sidebarCollapsible: false
            }
          }
        }
      }
    ]
  ],

  themes: ["docusaurus-theme-openapi-docs"]
};

module.exports = config;
