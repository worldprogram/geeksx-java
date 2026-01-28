export const navbar = [
    { text: '首页', link: '/' },
    { text: 'Java', link: '/Java/' },
    { text: '数据库', link: '/数据库/' },
    { text: '框架', link: '/框架/' },
    { text: '计算机基础', link: '/计算机基础/' },
    { text: '微服务/分布式', link: '/微服务/分布式/' },
    { text: '系统设计/场景', link: '/系统设计/场景/' },
    { text: '算法', link: '/算法/' },
    {
        text: '更多资源',
        children: [
            {
                text: '常用工具',
                children: [
                    { text: '在线 JSON 格式化', link: 'https://www.json.cn/' }
                ]
            }
        ]
    }
]
