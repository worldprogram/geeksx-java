import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  interviewSections,
  knowledgeSections,
  knowledgeMindmap,
} from "../docs/.vuepress/structure.mjs";

const ROOT = resolve(process.cwd());

function replaceBetween(content, start, end, replacement) {
  const startIndex = content.indexOf(start);
  const endIndex = content.indexOf(end);

  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
    throw new Error(`标记不存在或顺序错误: ${start} / ${end}`);
  }

  const before = content.slice(0, startIndex + start.length);
  const after = content.slice(endIndex);
  return `${before}\n${replacement}\n${after}`;
}

function writeIfChanged(filePath, content) {
  const oldContent = readFileSync(filePath, "utf8");
  if (oldContent !== content) {
    writeFileSync(filePath, content, "utf8");
    console.log(`[updated] ${filePath}`);
  } else {
    console.log(`[skip] ${filePath}`);
  }
}

function sectionChildrenMarkdown(section) {
  return section.children
    .map((item) => `- [${item.text}](${item.link})`)
    .join("\n");
}

function buildInterviewOverviewBlock() {
  const parts = ["## 分类直达", ""];

  for (const section of interviewSections) {
    parts.push(`### ${section.text}`);
    parts.push("");
    parts.push(sectionChildrenMarkdown(section));
    parts.push("");
  }

  return parts.join("\n").trimEnd();
}

function buildHomeInterviewLinks() {
  const lines = ["<ul>"];
  for (const section of interviewSections) {
    lines.push(`<li><a href=\"${section.link}\">${section.text}</a></li>`);
  }
  lines.push("</ul>");
  return lines.join("\n");
}

function buildHomeKnowledgeLinks() {
  const lines = ["<ul>"];
  for (const section of knowledgeSections) {
    lines.push(`<li><a href=\"${section.link}\">${section.text}</a></li>`);
  }
  lines.push("</ul>");
  return lines.join("\n");
}

function buildKnowledgeOverviewBlock() {
  const lines = ["## 专题导航", ""];
  for (const section of knowledgeSections) {
    lines.push(`- [${section.text}](${section.link})`);
  }
  return lines.join("\n");
}

function appendMindmapNodes(lines, nodes, depth) {
  const indent = "  ".repeat(depth);
  for (const node of nodes) {
    lines.push(`${indent}- ${node.text}`);
    if (node.children && node.children.length > 0) {
      appendMindmapNodes(lines, node.children, depth + 1);
    }
  }
}

function buildMindmapBlock() {
  const lines = [
    "```markmap",
    "",
    "- 极客思想",
    "  - 面试题",
  ];

  for (const section of interviewSections) {
    lines.push(`    - ${section.text}`);
    for (const child of section.children) {
      lines.push(`      - ${child.text}`);
    }
  }

  lines.push("  - 知识库");
  appendMindmapNodes(lines, knowledgeMindmap, 2);
  lines.push("```");

  return lines.join("\n");
}

function syncInterviewReadme() {
  const filePath = resolve(ROOT, "docs/面试题/README.md");
  const content = readFileSync(filePath, "utf8");
  const replaced = replaceBetween(
    content,
    "<!-- AUTO:INTERVIEW-SECTIONS:START -->",
    "<!-- AUTO:INTERVIEW-SECTIONS:END -->",
    buildInterviewOverviewBlock()
  );
  writeIfChanged(filePath, replaced);
}

function syncSectionReadme() {
  const filePath = resolve(ROOT, "docs/面试题/系统设计和场景面试题/README.md");
  const content = readFileSync(filePath, "utf8");
  const section = interviewSections.find((item) => item.text === "系统设计和场景面试题");
  if (!section) throw new Error("未找到系统设计和场景面试题配置");

  const replaced = replaceBetween(
    content,
    "<!-- AUTO:CURRENT-SECTION-ENTRIES:START -->",
    "<!-- AUTO:CURRENT-SECTION-ENTRIES:END -->",
    section.children.map((item) => `- [${item.text}](${item.link}.md)`).join("\n")
  );
  writeIfChanged(filePath, replaced);
}

function syncHomeReadme() {
  const filePath = resolve(ROOT, "docs/README.md");
  const content = readFileSync(filePath, "utf8");
  const interviewSynced = replaceBetween(
    content,
    "<!-- AUTO:HOME-INTERVIEW-LINKS:START -->",
    "<!-- AUTO:HOME-INTERVIEW-LINKS:END -->",
    buildHomeInterviewLinks()
  );
  const fullySynced = replaceBetween(
    interviewSynced,
    "<!-- AUTO:HOME-KNOWLEDGE-LINKS:START -->",
    "<!-- AUTO:HOME-KNOWLEDGE-LINKS:END -->",
    buildHomeKnowledgeLinks()
  );
  writeIfChanged(filePath, fullySynced);
}

function syncKnowledgeReadme() {
  const filePath = resolve(ROOT, "docs/知识库/README.md");
  const content = readFileSync(filePath, "utf8");
  const replaced = replaceBetween(
    content,
    "<!-- AUTO:KNOWLEDGE-SECTIONS:START -->",
    "<!-- AUTO:KNOWLEDGE-SECTIONS:END -->",
    buildKnowledgeOverviewBlock()
  );
  writeIfChanged(filePath, replaced);
}

function syncMindmap() {
  const filePath = resolve(ROOT, "docs/思维导图/README.md");
  const content = readFileSync(filePath, "utf8");
  const replaced = replaceBetween(
    content,
    "<!-- AUTO:MINDMAP:START -->",
    "<!-- AUTO:MINDMAP:END -->",
    buildMindmapBlock()
  );
  writeIfChanged(filePath, replaced);
}

syncInterviewReadme();
syncSectionReadme();
syncHomeReadme();
syncKnowledgeReadme();
syncMindmap();
