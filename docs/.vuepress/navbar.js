export const navbar = [
  { text: "首页", link: "/", icon: "house" },
  { text: "思维导图", link: "/思维导图/", icon: "diagram-project" },
  { text: "面试题", link: "/面试题/", icon: "person-chalkboard" },
  { text: "知识库", link: "/知识库/", icon: "book" },
  {
    text: "资源",
    icon: "compass",
    children: [
      {
        text: "常用工具",
        icon: "screwdriver-wrench",
        children: [
          {
            text: "在线 JSON 格式化",
            link: "https://www.json.cn/",
            icon: "file-code",
          },
        ],
      },
    ],
  },
];
