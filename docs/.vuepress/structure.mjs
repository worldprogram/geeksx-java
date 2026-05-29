export const interviewSections = [
  {
    text: "Java常见面试题",
    link: "/面试题/Java常见面试题/",
    overview: "巩固语言、集合、并发、JVM。",
    children: [
      { text: "Java基础面试题", link: "/面试题/Java常见面试题/Java基础面试题" },
      { text: "Java集合面试题", link: "/面试题/Java常见面试题/Java集合面试题" },
      { text: "Java并发面试题", link: "/面试题/Java常见面试题/Java并发面试题" },
      { text: "JavaIO面试题", link: "/面试题/Java常见面试题/JavaIO面试题" },
      { text: "JVM面试题", link: "/面试题/Java常见面试题/JVM面试题" },
    ],
  },
  {
    text: "数据库常见面试题",
    link: "/面试题/数据库常见面试题/",
    overview: "补齐 MySQL 与 Redis。",
    children: [
      { text: "MySQL面试题", link: "/面试题/数据库常见面试题/MySQL面试题" },
      { text: "Redis面试题", link: "/面试题/数据库常见面试题/Redis面试题" },
    ],
  },
  {
    text: "Java框架常见面试题",
    link: "/面试题/Java框架常见面试题/",
    overview: "聚焦 Spring 生态和工程实践。",
    children: [
      { text: "Spring面试题", link: "/面试题/Java框架常见面试题/Spring面试题" },
      { text: "MyBatis面试题", link: "/面试题/Java框架常见面试题/MyBatis面试题" },
      { text: "Springboot面试题", link: "/面试题/Java框架常见面试题/Springboot面试题" },
    ],
  },
  {
    text: "计算机基础面试题",
    link: "/面试题/计算机基础面试题/",
    overview: "打牢网络、操作系统、数据结构基础。",
    children: [
      { text: "数据结构面试题", link: "/面试题/计算机基础面试题/数据结构面试题" },
      { text: "计算机网络面试题", link: "/面试题/计算机基础面试题/计算机网络面试题" },
      { text: "操作系统面试题", link: "/面试题/计算机基础面试题/操作系统面试题" },
    ],
  },
  {
    text: "微服务和分布式面试题",
    link: "/面试题/微服务和分布式面试题/",
    overview: "强化分布式治理与中间件。",
    children: [
      {
        text: "微服务和分布式基础面试题",
        link: "/面试题/微服务和分布式面试题/微服务和分布式基础面试题",
      },
      { text: "SpringCloud面试题", link: "/面试题/微服务和分布式面试题/SpringCloud面试题" },
      { text: "Netty面试题", link: "/面试题/微服务和分布式面试题/Netty面试题" },
      { text: "Zookeeper面试题", link: "/面试题/微服务和分布式面试题/Zookeeper面试题" },
      { text: "MQ面试题", link: "/面试题/微服务和分布式面试题/MQ面试题" },
      { text: "Dubbo面试题", link: "/面试题/微服务和分布式面试题/Dubbo面试题" },
      { text: "Nginx面试题", link: "/面试题/微服务和分布式面试题/Nginx面试题" },
      { text: "ElasticSearch面试题", link: "/面试题/微服务和分布式面试题/ElasticSearch面试题" },
    ],
  },
  {
    text: "系统设计和场景面试题",
    link: "/面试题/系统设计和场景面试题/",
    overview: "强化系统设计思路与高频业务场景拆解。",
    children: [
      { text: "项目问题清单", link: "/面试题/系统设计和场景面试题/项目问题" },
      { text: "设计模式常见面试题", link: "/面试题/系统设计和场景面试题/设计模式常见面试题" },
    ],
  },
];

export const knowledgeSections = [
  { text: "计算机基础", link: "/知识库/计算机基础/" },
  { text: "Java框架", link: "/知识库/Java框架/" },
  { text: "算法", link: "/知识库/算法/" },
  { text: "微服务/分布式", link: "/知识库/微服务/分布式/" },
  { text: "系统设计和实践", link: "/知识库/系统设计和实践/" },
];

export const knowledgeSidebarConfig = {
  "/知识库/": [
    {
      text: "知识库导航",
      collapsible: true,
      children: [
        "/知识库/计算机基础/README.md",
        "/知识库/Java框架/README.md",
        "/知识库/算法/README.md",
        "/知识库/微服务/README.md",
        "/知识库/系统设计和实践/README.md",
      ],
    },
  ],
  "/知识库/计算机基础/": [
    {
      text: "计算机基础",
      collapsible: true,
      children: ["/知识库/计算机基础/README.md"],
    },
  ],
  "/知识库/Java框架/": [
    {
      text: "Java框架",
      collapsible: true,
      children: ["/知识库/Java框架/README.md"],
    },
  ],
  "/知识库/算法/": [
    {
      text: "算法",
      collapsible: true,
      children: ["/知识库/算法/README.md"],
    },
  ],
  "/知识库/微服务/": [
    {
      text: "微服务",
      collapsible: true,
      children: [
        "/知识库/微服务/README.md",
        "/知识库/微服务/分布式/README.md",
      ],
    },
  ],
  "/知识库/微服务/分布式/": [
    {
      text: "微服务/分布式",
      collapsible: true,
      children: ["/知识库/微服务/分布式/README.md"],
    },
  ],
  "/知识库/系统设计和实践/": [
    {
      text: "系统设计和实践",
      collapsible: true,
      children: ["/知识库/系统设计和实践/认证授权/README.md"],
    },
  ],
  "/知识库/系统设计和实践/认证授权/": [
    {
      text: "认证授权",
      collapsible: true,
      children: ["/知识库/系统设计和实践/认证授权/SSO单点登录.md"],
    },
  ],
};

export const knowledgeMindmap = [
  { text: "计算机基础" },
  { text: "Java框架" },
  { text: "算法" },
  { text: "微服务", children: [{ text: "分布式" }] },
  {
    text: "系统设计和实践",
    children: [{ text: "认证授权", children: [{ text: "SSO单点登录" }] }],
  },
];
