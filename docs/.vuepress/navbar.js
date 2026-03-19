export const navbar = [
  { text: "首页", link: "/", icon: "house" },
  {
    text: "内容",
    icon: "book-open",
    children: [
      {
        text: "面试题",
        link: "/面试题/",
        icon: "person-chalkboard",
      },
      {
        text: "知识库",
        link: "/知识库/",
        icon: "book",
      },
    ],
  },
  {
    text: "资源",
    icon: "compass",
    children: [
      {
        text: "专题速览",
        icon: "table-list",
        children: [
          {
            text: "Java 面试题",
            link: "/面试题/Java常见面试题/",
            icon: "fa-brands fa-java",
          },
          {
            text: "数据库面试题",
            link: "/面试题/数据库常见面试题/",
            icon: "database",
          },
          {
            text: "计算机基础",
            link: "/知识库/计算机基础/",
            icon: "laptop-code",
          },
          {
            text: "Java框架",
            link: "/知识库/Java框架/",
            icon: "code",
          },
          {
            text: "算法",
            link: "/知识库/算法/",
            icon: "microchip",
          },
          {
            text: "微服务/分布式",
            link: "/知识库/微服务/",
            icon: "network-wired",
          },
          {
            text: "系统设计/场景",
            link: "/知识库/系统设计/",
            icon: "object-group",
          },
          {
            text: "项目问题",
            link: "/面试题/项目问题/",
            icon: "briefcase",
          },
        ],
      },
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
