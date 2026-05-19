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
      children: [
        {
          text: "Java常见面试题",
          collapsible: true,
          children: [
            { text: "Java基础面试题", link: "/面试题/#java-basic" },
            { text: "Java集合面试题", link: "/面试题/#java-collection" },
            { text: "Java并发面试题", link: "/面试题/#java-concurrency" },
            { text: "JavaIO面试题", link: "/面试题/#java-io" },
            { text: "JVM面试题", link: "/面试题/#jvm" },
          ],
        },
        {
          text: "数据库常见面试题",
          collapsible: true,
          children: [
            { text: "MySQL面试题", link: "/面试题/#mysql" },
            { text: "Redis面试题", link: "/面试题/#redis" },
          ],
        },
        {
          text: "Java框架常见面试题",
          collapsible: true,
          children: [
            { text: "Spring面试题", link: "/面试题/#spring" },
            { text: "MyBatis面试题", link: "/面试题/#mybatis" },
            { text: "Springboot面试题", link: "/面试题/#springboot" },
          ],
        },
        {
          text: "计算机基础面试题",
          collapsible: true,
          children: [
            { text: "数据结构面试题", link: "/面试题/#data-structure" },
            { text: "计算机网络面试题", link: "/面试题/#computer-network" },
            { text: "操作系统面试题", link: "/面试题/#operating-system" },
          ],
        },
        {
          text: "微服务和分布式面试题",
          collapsible: true,
          children: [
            { text: "微服务和分布式基础面试题", link: "/面试题/#microservice-base" },
            { text: "SpringCloud面试题", link: "/面试题/#springcloud" },
            { text: "Netty面试题", link: "/面试题/#netty" },
            { text: "Zookeeper面试题", link: "/面试题/#zookeeper" },
            { text: "MQ面试题", link: "/面试题/#mq" },
            { text: "Dubbo面试题", link: "/面试题/#dubbo" },
            { text: "Nginx面试题", link: "/面试题/#nginx" },
            { text: "ElasticSearch面试题", link: "/面试题/#elasticsearch" },
          ],
        },
        {
          text: "项目问题",
          collapsible: true,
          children: [
            { text: "项目问题", link: "/面试题/#project-questions" },
          ],
        },
      ],
    },
  ],
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
  "/面试题/Java常见面试题/": [
    {
      text: "Java常见面试题",
      collapsible: true,
      children: [
        "/面试题/Java常见面试题/Java基础面试题.md",
        "/面试题/Java常见面试题/Java集合面试题.md",
        "/面试题/Java常见面试题/Java并发面试题.md",
        "/面试题/Java常见面试题/JavaIO面试题.md",
        "/面试题/Java常见面试题/JVM面试题.md",
      ],
    },

  ],
  "/面试题/数据库常见面试题/": [
    {
      text: "数据库常见面试题",
      collapsible: true,
      children: [
        "/面试题/数据库常见面试题/MySQL面试题.md",
        "/面试题/数据库常见面试题/Redis面试题.md",
      ],
    },
  ],
  "/面试题/Java框架常见面试题/": [
    {
      text: "Java框架常见面试题",
      collapsible: true,
      children: [
        "/面试题/Java框架常见面试题/Spring面试题.md",
        "/面试题/Java框架常见面试题/MyBatis面试题.md",
        "/面试题/Java框架常见面试题/Springboot面试题.md",
      ],
    },
  ],
  "/面试题/计算机基础面试题/": [
    {
      text: "计算机基础面试题",
      collapsible: true,
      children: [
        "/面试题/计算机基础面试题/数据结构面试题.md",
        "/面试题/计算机基础面试题/计算机网络面试题.md",
        "/面试题/计算机基础面试题/操作系统面试题.md",
      ],
    },
  ],
  "/面试题/微服务和分布式面试题/": [
    {
      text: "微服务和分布式面试题",
      collapsible: true,
      children: [
        "/面试题/微服务和分布式面试题/微服务和分布式基础面试题.md",
        "/面试题/微服务和分布式面试题/SpringCloud面试题.md",
        "/面试题/微服务和分布式面试题/Netty面试题.md",
        "/面试题/微服务和分布式面试题/Zookeeper面试题.md",
        "/面试题/微服务和分布式面试题/MQ面试题.md",
        "/面试题/微服务和分布式面试题/Dubbo面试题.md",
        "/面试题/微服务和分布式面试题/Nginx面试题.md",
        "/面试题/微服务和分布式面试题/ElasticSearch面试题.md",
      ],
    },
  ],
  "/面试题/项目问题/": [
    {
      text: "项目问题",
      collapsible: true,
      children: [
        "/面试题/项目问题/项目问题.md",
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
      children: [
        "/知识库/系统设计和实践/认证授权/README.md"],
    },
  ],
  "/知识库/系统设计和实践/认证授权/": [
    {
      text: "认证授权",
      collapsible: true,
      children: [
        "/知识库/系统设计和实践/认证授权/SSO单点登录.md",
      ],
    },
  ]
};
