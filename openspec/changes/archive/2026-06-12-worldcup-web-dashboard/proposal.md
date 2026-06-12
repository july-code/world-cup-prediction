## Why

当前世界杯预测数据以Markdown文档形式存储，阅读体验不佳且缺乏交互性。需要将数据可视化为两个专业体育风格的Web页面，提升数据展示效果和用户体验。

## What Changes

- 创建赛事主题风格的Web页面（深色背景 + 荧光绿/金色点缀，类似ESPN/FIFA官方风格）
- 页面1：AI预测跑分看板 - 展示所有比赛的预测数据
- 页面2：预测结果汇总 - 展示比赛结果与预测准确率统计
- 支持响应式布局，适配桌面和移动端
- 使用现代CSS技术实现毛玻璃效果和动画

## Capabilities

### New Capabilities
- `prediction-dashboard`: AI预测数据看板页面，展示各模型对比赛的预测概率和比分
- `results-summary`: 预测结果汇总页面，展示实际比赛结果与预测准确率对比

### Modified Capabilities
（无）

## Impact

- 需要创建HTML/CSS/JavaScript文件
- 数据来源于现有的Markdown文件，需要解析并转换为JSON格式
- 无后端依赖，纯前端静态页面
