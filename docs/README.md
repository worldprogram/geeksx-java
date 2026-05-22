---
home: true
heroText: 极客思想
tagline: Java 后端学习与面试实战知识站
heroImage: /images/logo-home.svg
heroImageStyle:
  borderRadius: 24px
  boxShadow: "0 18px 48px rgba(20, 71, 52, 0.24)"
actions:
  - text: 开始刷面试题
    link: /面试题/
    type: primary
  - text: 进入知识库
    link: /知识库/
    type: default
  - text: 查看思维导图
    link: /思维导图/
    type: default
footer: MIT Licensed | Copyright © 极客思想 | <a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备2025114499号</a>
footerHtml: true
---

<div class="gx-home-board">

<div class="gx-chips">
<span>面试冲刺</span>
<span>体系学习</span>
<span>项目表达</span>
<span>系统设计</span>
<span>微服务分布式</span>
</div>

### 今日学习从这里开始

<div class="gx-grid gx-grid-3">

<div class="gx-card gx-card-warm">
<h4>面试冲刺</h4>
<p>按高频问题组织，适合 7-30 天集中准备。</p>
<p><a href="/面试题/">进入面试题总览 →</a></p>
</div>

<div class="gx-card gx-card-calm">
<h4>体系学习</h4>
<p>按主题沉淀原理与实践，适合长期夯实。</p>
<p><a href="/知识库/">进入知识库总览 →</a></p>
</div>

<div class="gx-card gx-card-mint">
<h4>全局导图</h4>
<p>先看结构再看细节，建立完整知识地图。</p>
<p><a href="/思维导图/">打开思维导图 →</a></p>
</div>

</div>

</div>

## 内容地图

<div class="gx-grid gx-grid-2">

<div class="gx-card gx-card-list">
<h3>面试题分区</h3>
<ul>
<li><a href="/面试题/Java常见面试题/">Java常见面试题</a></li>
<li><a href="/面试题/数据库常见面试题/">数据库常见面试题</a></li>
<li><a href="/面试题/Java框架常见面试题/">Java框架常见面试题</a></li>
<li><a href="/面试题/计算机基础面试题/">计算机基础面试题</a></li>
<li><a href="/面试题/微服务和分布式面试题/">微服务和分布式面试题</a></li>
<li><a href="/面试题/项目问题/">项目问题</a></li>
</ul>
</div>

<div class="gx-card gx-card-list">
<h3>知识库分区</h3>
<ul>
<li><a href="/知识库/计算机基础/">计算机基础</a></li>
<li><a href="/知识库/Java框架/">Java框架</a></li>
<li><a href="/知识库/算法/">算法</a></li>
<li><a href="/知识库/微服务/分布式/">微服务/分布式</a></li>
<li><a href="/知识库/系统设计和实践/">系统设计和实践</a></li>
</ul>
</div>

</div>

## 推荐起步路线

1. 先看 [全站知识结构思维导图](/思维导图/)，建立全局认知。
2. 从 [Java基础面试题](/面试题/Java常见面试题/Java基础面试题.md) 与 [MySQL面试题](/面试题/数据库常见面试题/MySQL面试题.md) 进入高频核心。
3. 结合 [项目问题清单](/面试题/项目问题/项目问题.md) 做项目表达与追问准备。
4. 回到知识库专题页，补齐你薄弱的底层原理和工程实践。

## 常用入口

- [面试题总览](/面试题/)
- [知识库总览](/知识库/)
- [思维导图总览](/思维导图/)

<style>
.vp-project-home .vp-hero-info-wrapper {
	margin-bottom: 0.9rem;
	padding-top: 0.4rem;
}

.vp-project-home .vp-hero-image {
	margin: 0.4rem 0.8rem 0.4rem 0;
	max-height: 12rem;
}

.vp-project-home .vp-hero-title {
	margin-bottom: 0.3rem;
	line-height: 1.1;
}

.vp-project-home #main-description {
	margin-bottom: 0.65rem;
}

.vp-project-home .vp-hero-actions {
	margin-top: 0.45rem;
}

.vp-project-home #markdown-content h2 {
	margin-top: 1.2rem;
	margin-bottom: 0.55rem;
}

.gx-home-board {
	margin: 6px 0 18px;
	padding: 0;
}

.gx-chips {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin: 2px 0 12px;
}

.gx-chips span {
	padding: 4px 10px;
	border-radius: 999px;
	background: #f2f8f5;
	border: 1px solid rgba(30, 90, 65, 0.16);
	font-size: 0.84rem;
}

.gx-grid {
	display: grid;
	gap: 12px;
}

.gx-grid-3 {
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.gx-grid-2 {
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.gx-card {
	border-radius: 16px;
	padding: 14px 16px;
	border: 1px solid rgba(20, 71, 52, 0.12);
	background: #ffffff;
	box-shadow: 0 8px 18px rgba(10, 30, 20, 0.07);
}

.gx-card h4 {
	margin: 0 0 6px;
}

.gx-card p {
	margin: 4px 0;
}

.gx-card-list h3 {
	margin: 0 0 8px;
}

.gx-card-list ul {
	margin: 0;
	padding-left: 18px;
}

.gx-card-list li {
	margin: 2px 0;
}

.gx-card-warm {
	background: linear-gradient(145deg, #fff9ec 0%, #ffffff 70%);
}

.gx-card-calm {
	background: linear-gradient(145deg, #f1fbff 0%, #ffffff 70%);
}

.gx-card-mint {
	background: linear-gradient(145deg, #eefbf4 0%, #ffffff 70%);
}

@media (max-width: 719px) {
	.vp-project-home .vp-hero-image {
		max-height: 9.2rem;
		margin: 0.2rem 0.2rem 0.55rem;
	}

	.gx-home-board {
		margin-bottom: 14px;
	}

	.gx-card {
		padding: 12px 13px;
	}
}
</style>
