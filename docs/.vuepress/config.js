import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { navbar } from "./navbar";
import { sidebar } from "./sidebar";

export default defineUserConfig({
  lang: "zh-CN",
  title: "极客思想",
  description: "Java学习知识库",
  
  // 网页图标配置
  head: [
    ['link', { rel: 'icon', href: '/images/logo.svg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/logo.svg' }],
  ],

  bundler: viteBundler({
    viteOptions: {
      css: {
        preprocessorOptions: {
          scss: {
            quietDeps: true,
            silenceDeprecations: ["import", "legacy-js-api", "if-function", "color-functions"],
          },
        },
      },
    },
  }),

  theme: hopeTheme({
    hostname: "https://worldprogram.github.io",
    author: {
      name: "极客思想",
      url: "https://worldprogram.github.io",
    },
    logo: "/images/logo.svg",
    repo: "worldprogram/geeksx-java",
    docsDir: "docs",
    
    // 图标资源配置
    iconAssets: "fontawesome-with-brands",
    
    navbar,
    sidebar,
    markdown: {
      hint: true,
      gfm: true,
    },
    plugins: {
      readingTime: true,
      mdEnhance: {
      },
    },
  }),
});
