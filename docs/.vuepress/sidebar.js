import { interviewSections, knowledgeSidebarConfig } from "./structure.mjs";

const interviewSidebarGroups = interviewSections.map((section) => ({
  text: section.text,
  collapsible: true,
  children: section.children.map((item) => ({
    text: item.text,
    link: item.link,
  })),
}));

export const sidebar = {
  "/思维导图/": [
    {
      text: "思维导图",
      collapsible: true,
      children: ["/思维导图/README.md"],
    },
  ],
  "/面试题/": [
    {
      text: "面试题导航",
      collapsible: true,
      children: interviewSidebarGroups,
    },
  ],
  ...knowledgeSidebarConfig,
};
