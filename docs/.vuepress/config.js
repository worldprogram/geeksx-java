import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { navbar } from './navbar'
import { sidebar } from './sidebar'


export default defineUserConfig({
    lang: 'zh-CN',
    title: '极客思想',
    description: '从入门到精通的Java学习指南',
    bundler: viteBundler(),
    theme: defaultTheme({
        logo: '/images/logo.svg',
        repo: 'worldprogram/geeksx-java',
        docsDir: 'docs',
        navbar,
        sidebar,
    }),
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索文档'
                }
            }
        })
    ]
})