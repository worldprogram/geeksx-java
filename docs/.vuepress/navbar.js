export const navbar = [
  { text: "首页", link: "/", icon: "house" },
  { 
    text: "Java", 
    link: "/Java/",
    icon: "fa-brands fa-java",
  },
  { text: "数据库", link: "/数据库/", icon: "database" },
  { text: "Java框架", link: "/Java框架/", icon: "code" },
  { text: "计算机基础", link: "/计算机基础/", icon: "laptop-code" },
  { text: "微服务/分布式", link: "/微服务/分布式/", icon: "network-wired" },
  { text: "系统设计/场景", link: "/系统设计/场景/", icon: "object-group" },
  { text: "算法", link: "/算法/", icon: "microchip" },
  {
    text: "更多资源",
    icon: "list",
    children: [
      {
        text: "常用工具",
        icon: "screwdriver-wrench",
        children: [{ text: "在线 JSON 格式化", link: "https://www.json.cn/", icon: "file-code" }],
      },
    ],
  },
];
