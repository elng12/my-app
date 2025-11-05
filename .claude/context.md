\# 项目说明

技术栈：Next.js 14、TypeScript、Tailwind



运行时约定：

\- 默认使用 Edge；若需 Node API，设置 runtime = 'nodejs'



架构约定：

\- 组件使用“命名导出”

\- RSC 为默认，必须在客户端使用的组件加 'use client'



关键文件：

\- /src/lib/db.ts ：数据库访问（仅 Node）

\- /middleware.ts ：鉴权和 A/B 实验

\- /src/lib/cache.ts ：缓存工具（键名包含用户和参数，TTL=60s）



代码风格：

\- ESLint + Prettier，提交信息用 feat/fix/chore 前缀



