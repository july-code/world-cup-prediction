# 🏆 2026世界杯 AI预测看板

## 项目结构

```
code/
├── prediction-dashboard.html  # 预测看板页面
├── results-summary.html       # 结果汇总页面
├── styles.css                 # 共享样式
├── results-styles.css         # 结果页面样式
├── app.js                     # 预测看板JS
├── results-app.js             # 结果汇总JS
├── data.json                  # 预测数据
├── server.py                  # 本地服务器
└── README.md                  # 说明文档
```

## 使用方法

### 方法1：使用本地服务器（推荐）

1. 打开终端，进入 `code` 目录
2. 运行服务器：
   ```bash
   python server.py
   ```
3. 浏览器会自动打开，或手动访问：
   - 预测看板：http://localhost:8000/prediction-dashboard.html
   - 结果汇总：http://localhost:8000/results-summary.html

### 方法2：使用 VS Code Live Server

1. 安装 VS Code 插件 "Live Server"
2. 右键点击 `prediction-dashboard.html` 或 `results-summary.html`
3. 选择 "Open with Live Server"

## 数据更新

数据存储在 `data.json` 文件中，格式如下：

```json
{
  "lastUpdated": "2026年6月12日",
  "matches": [...],
  "pendingMatches": [...],
  "modelAccuracy": [...]
}
```

更新数据后，刷新页面即可看到最新内容。

## 技术栈

- HTML5
- CSS3 (CSS Variables, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- 无框架依赖
