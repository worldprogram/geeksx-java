import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { navbar } from "./navbar";
import { sidebar } from "./sidebar";

export default defineUserConfig({
  lang: "zh-CN",
  title: "极客思想",
  description: "Java学习知识库",

  bundler: viteBundler({
    viteOptions: {
      css: {
        preprocessorOptions: {
          scss: {
            quietDeps: true,
            silenceDeprecations: ["import", "legacy-js-api"],
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
    iconAssets: "fontawesome-with-brands",
    navbar,
    sidebar,
    plugins: {
      readingTime: true,
      mdEnhance: {
        hint: true,
        gfm: true,
        container: true,
      },
    },
  }),
});
