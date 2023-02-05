/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [{ type: "autogenerated", dirName: "guides" }],
  openApiSidebar: [
    {
      type: "category",
      label: "API",
      collapsible: false,
      collapsed: false,
      link: {
        type: "generated-index",
        title: "Camunda Platform REST API",
        description: "Here you can learn all the details of this API!",
        slug: "/api"
      },
      // @ts-ignore
      items: require("./docs/api/sidebar.js")
    }
  ]
};

module.exports = sidebars;
