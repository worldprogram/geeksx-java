export const navbar = [
  { text: "首页", link: "/" },
  {
    text: "学习路线",
    link: "/学习路线/",
    children: [
      { text: "Java 入门", link: "/学习路线/Java入门.md" },
      { text: "Java 进阶", link: "/学习路线/Java进阶.md" },
      { text: "数据库", link: "/学习路线/数据库.md" },
      { text: "Java框架", link: "/学习路线/Java框架.md" },
      { text: "计算机基础", link: "/学习路线/计算机基础.md" },
      { text: "算法", link: "/学习路线/算法.md" },
      { text: "系统设计", link: "/学习路线/系统设计.md" },
      { text: "面试冲刺", link: "/学习路线/面试冲刺.md" },
    ],
  },
  {
    text: "学习计划",
    link: "/学习计划/",
    children: [
      { text: "Java 基础速成", link: "/学习计划/P1-Java基础速成.md" },
      { text: "Java 进阶修炼", link: "/学习计划/P2-Java进阶修炼.md" },
      { text: "面试突击冲刺", link: "/学习计划/P3-面试突击冲刺.md" },
      { text: "架构师成长", link: "/学习计划/P4-架构师成长.md" },
    ],
  },
  { text: "Java", link: "/Java/" },
  { text: "数据库", link: "/数据库/" },
  { text: "Java框架", link: "/Java框架/" },
  { text: "计算机基础", link: "/计算机基础/" },
  { text: "微服务/分布式", link: "/微服务/分布式/" },
  { text: "系统设计/场景", link: "/系统设计/场景/" },
  { text: "算法", link: "/算法/" },
  {
    text: "更多资源",
    children: [
      {
        text: "常用工具",
        children: [{ text: "在线 JSON 格式化", link: "https://www.json.cn/" }],
      },
    ],
  },
];
