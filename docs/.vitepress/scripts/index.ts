import glob from "fast-glob";
import matter from "gray-matter";
import { PAGE_IGNORE, PAGE_SOURCE, docsRoot } from "./path";
import { readFileSync } from "fs";
import { basename, relative, sep } from "path";
import { matchGroup } from "./utils";
import { FileItem } from ".vitepress/typings/blog";

console.log(docsRoot);

const files = glob.sync(PAGE_SOURCE, { ignore: PAGE_IGNORE });
const pageData: FileItem[] = [];
for (let file of files) {
  const group: { [key: string]: string } = matchGroup(basename(file));
  if (!group["name"]) {
    continue;
  }
  const order = Number(group["order"] || 0);
  const name = group["name"];

  const fileContent = readFileSync(file, "utf-8");
  const dirs: string[] = relative("", file).split(sep).slice(0, -1);
  const { data: frontmatter = {}, excerpt, content } = matter(fileContent, { excerpt: true });
  if (frontmatter["layout"]) {
    continue;
  }
  const { tag, tags, categories } = frontmatter;
  pageData.push({
    order,
    title: name,
    link: file,
    date: "",
    author: "",
    tags: "",
    categories: "",
    keywords: ""
  });
}
