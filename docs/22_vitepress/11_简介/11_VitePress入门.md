# VitePress 简介与入门

## 1. 简介

[VitePress](https://vitepress.dev) 是基于 Vite 构建的静态网站生成器，专为文档网站设计。它结合了 Vue 3 的强大功能和 Vite 的极致性能，提供了轻量级、快速、易于使用的文档站点解决方案。

- **轻量**：VitePress 继承了 Vite 的特性，使用 ES 模块即时服务，开发体验流畅。
- **简洁**：配置和用法非常简单，适合快速构建文档站点。
- **高效**：生成静态文件，优化 SEO 和性能表现。
- **强大的 Vue 支持**：可以轻松集成 Vue 组件，用于构建丰富的文档内容。

## 2. 使用场景

- 文档

  VitePress 附带一个专为技术文档设计的默认主题。你现在正在阅读的这个页面以及 [Vite](https://vitejs.dev/)、[Rollup](https://rollupjs.org/)、[Pinia](https://pinia.vuejs.org/)、[VueUse](https://vueuse.org/)、[Vitest](https://vitest.dev/)、[D3](https://d3js.org/)、[UnoCSS](https://unocss.dev/)、[Iconify](https://iconify.design/) [等](https://www.vuetelescope.com/explore?framework.slug=vitepress)文档都是基于这个主题的。

  [Vue.js 官方文档](https://cn.vuejs.org/)也是基于 VitePress 的。但是为了可以在不同的翻译文档之间切换，它自定义了自己的主题。

- 博客、档案和营销网站

  VitePress 支持完全的自定义主题，具有标准 Vite + Vue 应用程序的开发体验。基于 Vite 构建还意味着可以直接利用其生态系统中丰富的 Vite 插件。此外，VitePress 提供了灵活的 API 来[加载数据](https://vitepress.dev/zh/guide/data-loading) (本地或远程)，也可以[动态生成路由](https://vitepress.dev/zh/guide/routing#dynamic-routes)。只要可以在构建时确定数据，就可以使用它来构建几乎任何东西。

  [Vue.js 官方博客](https://blog.vuejs.org/)是一个简单的博客页面，它根据本地内容生成其索引页面。

## 3. 快速开始

### 3.1 安装准备

- [Node.js](https://nodejs.org/en/) >= 18.0.0
- [pnpm](https://pnpm.io/) >= 7.0.0
- Markdown语法: <https://markdown.com.cn/>

### 3.2 创建项目文件夹

```bash
mkdir docs && cd docs && pnpm init
pnpm add vitepress -D
```

### 3.3 安装`vitepress`

::: code-group

```sh [npm]
$ npm add -D vitepress
```

```sh [pnpm]
$ pnpm add -D vitepress
```

```sh [yarn]
$ yarn add -D vitepress
```

```sh [yarn]
$ yarn add -D vitepress vue
```

```sh [bun]
$ bun add -D vitepress
```

:::

::: details 遇到了 missing peer deps 警告？
如果使用 PNPM，会注意到对 `@docsearch/js` 的 missing peer deps 警告。这不会影响 VitePress 运行。如果希望禁止显示此警告，请将以下内容添加到 `package.json`：

```json
{
  "pnpm": {
    "peerDependencyRules": {
      "ignoreMissing": ["@algolia/client-search", "search-insights"]
    }
  }
}
```

:::

::: tip 注意

VitePress 是仅 ESM 的软件包。不要使用 `require()` 导入它，并确保最新的 `package.json` 包含 `"type": "module"`，或者更改相关文件的文件扩展名，例如 `.vitepress/config.js` 到 `.mjs`/`.mts`。更多详情请参考 [Vite 故障排除指南](http://vitejs.dev/guide/troubleshooting.html#this-package-is-esm-only)。此外，在异步 CJS 上下文中，可以使用 `await import('vitepress')` 代替。

:::

### 3.4 安装向导

VitePress 附带一个命令行设置向导，可以帮助你构建一个基本项目。安装后，通过运行以下命令启动向导：

::: code-group

```sh [pnpm]
pnpm vitepress init
```

```sh [npm]
npx vitepress init
```

```sh [yarn]
yarn vitepress init
```

:::

将需要回答几个简单的问题：

<<< @/22_vitepress/snippets/init.ansi

:::tip Vue 作为 peer dependency
如果打算使用 Vue 组件或 API 进行自定义，还应该明确地将 `vue` 安装为 dependency。
:::

### 3.5 启动并运行 {#up-and-running}

该工具还应该将以下 npm 脚本注入到 `package.json` 中：

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs --port 8080"
  }
}
```

`docs:dev` 脚本将启动具有即时热更新的本地开发服务器。使用以下命令运行它：

::: code-group

```sh [npm]
$ npm run docs:dev
```

```sh [pnpm]
$ pnpm run docs:dev
```

```sh [yarn]
$ yarn docs:dev
```

```sh [bun]
$ bun run docs:dev
```

:::

除了 npm 脚本，还可以直接调用 VitePress：

::: code-group

```sh [npm]
$ npx vitepress dev docs
```

```sh [pnpm]
$ pnpm vitepress dev docs
```

```sh [yarn]
$ yarn vitepress dev docs
```

```sh [bun]
$ bun vitepress dev docs
```

:::

开发服务应该会运行在 `http://localhost:5173` 上。在浏览器中访问 URL 以查看新站点的运行情况吧！

### 3.6 命令行接口

> `vitepress dev`

使用指定目录作为根目录来启动 VitePress 开发服务器。默认为当前目录。在当前目录下运行时也可以省略 `dev` 命令。

用法

```sh
# 从当前目录启动，省略 `dev`
vitepress

# 从子目录启动
vitepress dev [root]
```

选项 {#options}

| 选项            | 说明                                       |
|:----------------|:-------------------------------------------|
| `--open [path]` | 启动时打开浏览器 (`boolean \| string`)     |
| `--port <port>` | 指定端口 (`number`)                        |
| `--base <path>` | public base URL (默认值: `/`) (`string`)   |
| `--cors`        | 启用 CORS                                  |
| `--strictPort`  | 如果指定的端口已被占用则退出 (`boolean`)   |
| `--force`       | 强制优化程序忽略缓存并重新绑定 (`boolean`) |

> `vitepress build`

构建用于生产环境的 VitePress 站点。

用法

```sh
vitepress build [root]
```

选项

| 选项                           | 说明                                                                                             |
|:-------------------------------|:-------------------------------------------------------------------------------------------------|
| `--mpa` (experimental)         | [MPA 模式](https://vitepress.dev/zh/guide/mpa-mode) 下构建，无需客户端激活 (`boolean`)           |
| `--base <path>`                | public base URL (默认值: `/`) (`string`)                                                         |
| `--target <target>`            | 转译目标 (默认值：`"modules"`) (`string`)                                                        |
| `--outDir <dir>`               | 输出目录 (默认值：`.vitepress/dist`) (`string`)                                                  |
| `--minify [minifier]`          | 启用/禁用压缩，或指定要使用的压缩程序 (默认值：`"esbuild"`) (`boolean \| "terser" \| "esbuild"`) |
| `--assetsInlineLimit <number>` | 静态资源 base64 内联阈值（以字节为单位）(默认值：`4096`) (`number`)                              |

> `vitepress preview`

在本地预览生产版本。

用法

```sh
vitepress preview [root]
```

选项

| 选项            | 说明                                     |
| --------------- | ---------------------------------------- |
| `--base <path>` | public base URL (默认值: `/`) (`string`) |
| `--port <port>` | 指定端口 (`number`)                      |

## 4 项目配置

### 4.1 文件结构

如果正在构建一个独立的 VitePress 站点，可以在当前目录 (`./`) 中搭建站点。但是，如果在现有项目中与其他源代码一起安装 `VitePress`，建议将站点搭建在嵌套目录 (例如 `./docs`) 中，以便它与项目的其余部分分开。假设选择在 `./docs` 中搭建 `VitePress` 项目，生成的文件结构应该是这样的：

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.tms
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
```

`docs` 目录作为 VitePress 站点的项目**根目录**。`.vitepress` 目录是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的位置。

:::tip
默认情况下，VitePress 将其开发服务器缓存存储在 `.vitepress/cache` 中，并将生产构建输出存储在 `.vitepress/dist` 中。如果使用 Git，应该将它们添加到 `.gitignore` 文件中。也可以手动[配置](https://vitepress.dev/zh/reference/site-config#outdir)这些位置。
:::

### 4.2 配置文件

配置文件 (`.vitepress/config.tms`) 让你能够自定义 VitePress 站点的各个方面，最基本的选项是站点的标题和描述：

```ts
// .vitepress/config.tms
export default {
  // 站点级选项
  title: 'VitePress',
  description: 'Just playing around.',

  themeConfig: {
    // 主题级选项
  }
}
```

还可以通过 `themeConfig` 选项配置主题的行为。有关所有配置选项的完整详细信息。

## 5. Git提交

```shell
git init
git remote add origin https://github.com/username/repo.git
git add .
git commit -m "first commit"
git push -u origin master
```

此时你的目录应该是这样的，这里少加了.gitignore，记得手动加上

:::detail .gitignore

```text
node_modules
.DS_Store
dist
dist-ssr
cache
.cache
.temp
*.local
```

:::

## 6. 部署到 GitHub

1. 在项目的 .github/workflows 目录中创建一个名为 deploy.yml 的文件，其中包含这样的内容：

   ```yaml
   # 构建 VitePress 站点并将其部署到 GitHub Pages 的示例工作流程

   name: Deploy VitePress site to Pages

   on:
     # 在针对 `main` 分支的推送上运行。如果你
     # 使用 `master` 分支作为默认分支，请将其更改为 `master`
     push:
       branches: [main, master]

     # 允许你从 Actions 选项卡手动运行此工作流程
     workflow_dispatch:

   # 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages
   permissions:
     contents: read
     pages: write
     id-token: write

   # 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
   # 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
   concurrency:
     group: pages
     cancel-in-progress: false

   jobs:
     # 构建工作
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3
           with:
             fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
         - name: Setup pnpm
           uses: pnpm/action-setup@v2 # 安装pnpm并添加到环境变量
           with:
             version: 8.6.12 # 指定需要的 pnpm 版本
         - name: Setup Node
           uses: actions/setup-node@v3
           with:
             node-version: 18
             cache: pnpm # 或 pnpm / yarn
         - name: Setup Pages
           uses: actions/configure-pages@v3 # 在工作流程自动配置GithubPages
         - name: Install dependencies
           run: pnpm install # 或 pnpm install / yarn install / bun install
         - name: Build with VitePress
           run: |
             pnpm docs:build # 或 pnpm docs:build / yarn docs:build / bun run docs:build
             touch .nojekyll  # 通知githubpages不要使用Jekyll处理这个站点，不知道为啥不生效，就手动搞了
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v2
           with:
             path: .vitepress/dist

     # 部署工作
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       needs: build
       runs-on: ubuntu-latest
       name: Deploy
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v2
   ```

2. 在存储库设置中的“Pages”菜单项下，选择“Build and deployment > Source > GitHub Actions”。

3. 将更改推送到 `main` 分支并等待 GitHub Action 工作流完成。你应该看到站点部署到 `https://<username>.github.io/[repository]/` 或 `https://<custom-domain>/`，这取决于你的设置。你的站点将在每次推送到 `main` 分支时自动部署。
