# vite-react-ts-botempo

一个面向个人项目的前端模板，基于 `Vite + React + TypeScript + Tailwind CSS v4`，内置基础代码规范、路径别名和一套可直接改造的默认首页。

适合用来快速起一个中小型前端项目、活动页、作品页或后台前台混合的 React 应用。

## 特性

- `Vite 8`：开发启动快，构建简单
- `React 19` + `TypeScript 6`
- `Tailwind CSS v4`：通过 `@tailwindcss/vite` 接入
- `ESLint 9`：包含 TypeScript、React Hooks、React Refresh、import 规则
- `Prettier 3` + `prettier-plugin-tailwindcss`
- `@` 路径别名，默认映射到 `src`
- 提供一个默认落地页作为起始 UI，而不是纯空白模板

## 技术栈

- 构建工具：`Vite`
- 框架：`React`
- 语言：`TypeScript`
- 样式：`Tailwind CSS v4` + 普通 CSS
- 代码检查：`ESLint`
- 代码格式化：`Prettier`
- 包管理器：`pnpm`

## 项目结构

```text
.
├─ public/
│  ├─ favicon.svg
│  └─ icons.svg
├─ src/
│  ├─ assets/
│  │  ├─ hero.png
│  │  ├─ react.svg
│  │  └─ vite.svg
│  ├─ App.tsx
│  ├─ App.css
│  ├─ index.css
│  └─ main.tsx
├─ eslint.config.js
├─ index.html
├─ package.json
├─ tsconfig.app.json
├─ tsconfig.node.json
└─ vite.config.ts
```

### 目录说明

- `src/main.tsx`：应用入口，挂载 React 根节点
- `src/App.tsx`：默认页面入口，通常是你改造模板时的第一站
- `src/index.css`：全局样式、CSS 变量、排版和主题基础
- `src/App.css`：当前首页相关样式，同时包含 `@import "tailwindcss"`
- `src/assets`：模板默认静态资源
- `public/icons.svg`：SVG symbol 图标集合
- `vite.config.ts`：Vite 配置，已配置 `@ -> src` 别名
- `eslint.config.js`：扁平化 ESLint 配置

## 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 启动开发环境

```bash
pnpm dev
```

### 3. 构建生产包

```bash
pnpm build
```

### 4. 本地预览构建结果

```bash
pnpm preview
```

### 5. 执行代码检查

```bash
pnpm lint
```

## 可用脚本

```bash
pnpm dev      # 启动开发服务器
pnpm build    # TypeScript build check + Vite build
pnpm preview  # 预览生产构建
pnpm lint     # 执行 ESLint
```

## 模板约定

### 1. 路径别名

项目已配置 `@` 指向 `src`，例如：

```ts
import App from "@/App";
```

### 2. Tailwind CSS 使用方式

当前模板通过 `@tailwindcss/vite` 接入 Tailwind，并在 `src/App.css` 中使用：

```css
@import "tailwindcss";
```

如果你准备把 Tailwind 作为全局样式入口，更推荐后续迁移到 `src/index.css` 统一管理。

### 3. ESLint 规则方向

默认规则重点包括：

- TypeScript 类型检查规则
- React Hooks 规则
- React Refresh 相关约束
- import 路径解析、重复导入、分组排序
- 与 Prettier 冲突的规则已关闭

### 4. Prettier

已启用 `prettier-plugin-tailwindcss`，会自动整理 Tailwind class 顺序。

## 作为模板时的建议修改点

创建新项目后，一般优先改这些地方：

- `package.json` 中的项目名
- `src/App.tsx` 中的默认首页内容
- `src/index.css` 中的颜色变量、字体和全局排版
- `public/favicon.svg`
- `src/assets/` 中的示例图片和 Logo
- `README.md` 中针对具体业务的说明

## 当前模板适合的场景

- 个人作品集
- 产品展示页 / Landing Page
- 需要快速起步的 React 小型项目
- 想保留基础工程规范但不想从零配配置的前端仓库

## 后续可扩展方向

如果你后面想把这个模板继续升级，可以考虑补充：

- `husky + lint-staged`
- `stylelint`
- `vitest` / `playwright`
- `react-router`
- 状态管理方案
- 请求层封装
- 环境变量分层

## License

如果这是你的私人模板仓库，可以按你的需要补充许可证；如果暂时不开放，可以先留空。
