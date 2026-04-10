# vite-react-ts-botempo

一个面向个人项目的前端模板，基于 `Vite + React + TypeScript + Tailwind CSS v4`，内置基础代码规范、路径别名和一套可直接改造的默认首页。

适合用来快速起一个中小型前端项目、活动页、作品页或后台前台混合的 React 应用。

## 特性

- `Vite 8`：开发启动快，构建简单
- `React 19` + `TypeScript 6`
- `Tailwind CSS v4`：通过 `@tailwindcss/vite` 接入
- `ESLint 9`：包含 TypeScript、React Hooks、React Refresh、import 规则
- `Prettier 3` + `prettier-plugin-tailwindcss`
- `Vitest` + Testing Library
- `husky` + `lint-staged`
- `@` 路径别名，默认映射到 `src`

## 常用命令

```bash
pnpm dev
pnpm lint
pnpm test:run
pnpm build
pnpm check
```

## Git Hooks

- `pre-commit`：运行 `lint-staged`
- `pre-push`：运行 `pnpm check`

## GitHub Pages

项目通过环境变量 `VITE_BASE_PATH` 控制打包基础路径。

- 本地开发默认使用 `/`
- GitHub Actions 部署时会自动注入 `/${{ github.event.repository.name }}/`

如果你从这个模板创建了新仓库，不需要再手改 `vite.config.ts` 里的仓库名。
