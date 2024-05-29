## 项目技术栈

- [pnpm - 速度快、节省磁盘空间的软件包管理器](https://www.pnpm.cn/)
- [Vue.js（渐进式 JavaScript 框架）](https://cn.vuejs.org/guide/quick-start.html#vite)
- [Vite（下一代前端开发与构建工具）](https://cn.vitejs.dev/)
- [turbo （构建工具）](https://turbo.build/)
- [Gitee - API 文档](https://gitee.com/api/v5/swagger#/getV5ReposOwnerRepoStargazers?ex=no)

## 搭建组件库

- [pnpm monorepo+vue3+vite 搭建组件库](https://juejin.cn/post/7212538330829996092)
- [基于 vue3+ts+Element-plus 二次封装基础组件文档](https://gitee.com/wocwin/t-ui-plus)

## 创建仓库

- 参考地址: <https://juejin.cn/post/7117897323014783013>
- 最美博客: <https://gitee.com/littledokey/poetize>

```bash
pnpm init
type nul > pnpm-workspace.yaml
md packages

type nul > .npmrc
echo shamefully-hoist = true > .npmrc

type nul > .gitignore

## 全局安装
pnpm install vue -w
pnpm install typescript -w -D
pnpm install vue-tsc -w -D
pnpm install @vitejs/plugin-vue vite -D -w
pnpm install sass -D -w
pnpm install minimist esbuild -w -D
## 添加TS配置文件tsconfig.json
pnpm tsc --init

## 创建子项目
pnpm create vite components --- --template vue-ts
pnpm uninstall vue
pnpm uninstall @vitejs/plugin-vue -D
pnpm uninstall vite -D
pnpm uninstall typescript -D
pnpm i @types/node --save-dev
## 添加依赖
pnpm install @haijunit/mark-ui@* --filter @haijunit/web1
```

### 技巧

```javaScript
// 文件的引入 得益于：tsconfig.json
import { isObject } from '@manage/shared/utils';

// css的引入 得益于：sass
@import "@manage/shared/styles/index.scss";
```

### 配置

```bash
## 安装eslint格式化统一代码(VsCode编辑器安装Volar、ESlint插件)
pnpm install eslint eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin -D -w

## 安装prettier
pnpm install prettier eslint-config-prettier eslint-plugin-prettier -D -w

## release工作流程
pnpm install @changesets/cli -D -w

npm install rimraf -g
```

## `verdaccio`搭建 npm 私有仓库

```bash
## 全局安装 verdaccio
npm i -g verdaccio
## 在终端中输入 verdaccio 命令启动 verdaccio：
verdaccio
## 访问：http://localhost:4873/

## 创建用户
npm adduser --registry  http://localhost:4873
## 发布 npm 包到私有仓库
npm publish --registry http://localhost:4873/

## 使用私有仓库npm包
pnpm create vite demo
npm set registry http://localhost:4873
pnpm add @haijunit/components

## FAQ
## Could not find a declaration file for module '@haijunit/components'.
echo declare module '*' >> shims-vue-d.ts
```
