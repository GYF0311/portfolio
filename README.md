# 高一帆 · 个人作品集（portfolio）

深色终端绿 · 黑客美学的个人网站。纯 HTML + CSS + JS，无框架、无构建、无 CDN，离线可直接打开。

## 目录结构

```
portfolio/
├── index.html                     # 主页（单页滚动：Hero/About/Experience/Projects/Writing/Contact）
├── assets/
│   ├── portfolio.css              # 设计系统（配色/组件/响应式），全站共用
│   ├── portfolio.js               # 交互（终端打字、移动端导航、滚动淡入）
│   ├── favicon.svg
│   └── 高一帆-AI数据运营简历.pdf
└── projects/
    ├── annotation-demo/           # 标注平台 Demo（React 构建产物，HashRouter，可交互）
    ├── eval-research.html         # 大模型评测体系研究
    ├── teaching.html              # 且曼 AI 训练师提效实战课
    └── ai-workflow.html           # 我的 AI 工作系统
```

## 本地预览

直接双击 `index.html` 即可（file:// 也能跑，因为无外链依赖）。
若某些浏览器对 file:// 下的相对路径较严格，可起本地静态服务器：

```bash
cd portfolio
python3 -m http.server 8080
# 打开 http://localhost:8080
```

## 设计系统

全站视觉继承第七/八节课件的「深色终端绿-黑客美学」设计系统，核心令牌在 `assets/portfolio.css` 的 `:root`：
主背景 `--bg:#070b08`、主强调 `--green:#39ff7d`、毛玻璃面板 + 双径向绿色光晕背景。改一处 CSS 变量即可全站换肤。

## 口径一致性

所有数字沿用简历口径：3 年经验 / 累计交付 80 万+ / 评测口径一致率 78%→91% / AI 预筛 65%→82% / 支撑 8–11 轮迭代。

## 后续部署（本轮未做）

本轮只做本地开发。将来上线可推 GitHub 后用 EdgeOne Pages 绑定仓库自动部署，或用「直接上传」拖文件夹上线。
