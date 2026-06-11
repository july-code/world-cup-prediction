import re
import pandas as pd


def parse_worldcup_md(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. 按照比赛切分块 (匹配 ### # 队伍1 vs 队伍2)
    matches_raw = re.split(r"(?=###\s*#\s*.*?vs.*?)", content)

    all_data = []

    for match_block in matches_raw:
        if not match_block.strip() or "vs" not in match_block:
            continue

        # 提取比赛对阵和日期
        match_info = re.search(r"###\s*#\s*(.*?vs.*?)(?:\s*\[.*\])?\n", match_block)
        date_info = re.search(r">\s*(\d{8})", match_block)

        if not match_info:
            continue

        match_name = match_info.group(1).strip()
        match_date = date_info.group(1).strip() if date_info else "未知"

        # 2. 在当前比赛块中，切分各个模型 (匹配 #### gemini/gpt/deepseek/智谱)
        model_blocks = re.split(r"(?=####\s*\w+)", match_block)

        for model_block in model_blocks:
            if not model_block.strip() or "####" not in model_block:
                continue

            # 提取模型名称
            model_name = (
                re.search(r"####\s*(\w+)", model_block).group(1).strip().lower()
            )

            # --- 核心提取逻辑 (使用正则容错) ---

            # 提取胜平负置信度分布
            spf_match = re.search(
                r"主队胜\s*\[?(\d+)\]?%\s*\|\s*双方平\s*\[?(\d+)\]?%\s*\|\s*客队胜\s*\[?(\d+)\]?%",
                model_block,
            )
            if not spf_match:
                # 兼容部分模型微调了文案的情况
                spf_match = re.search(
                    r"(\d+)%\s*\|\s*(\d+)%\s*\|\s*(\d+)%", model_block
                )

            spf_dist = (
                f"胜{spf_match.group(1)}%/平{spf_match.group(2)}%/负{spf_match.group(3)}%"
                if spf_match
                else "未预测"
            )

            # 提取 Top 3 比分
            # 寻找类似 [2-1] 或 **2-1** 或纯数字 2-1 的格式
            scores = re.findall(
                r"(?:1\.\s*|2\.\s*|3\.\s*)[\*\[]*(\d+[-:]\d+)[\*\]]*", model_block
            )

            # 提取 Top 3 对应的概率/置信度
            probs = re.findall(
                r"(?:概率期望|置信度|概率)[:：\s]*[\*\[]*(\d+)%[\*\]]*",
                model_block,
            )

            # 格式化比分输出
            top1 = (
                f"{scores[0]}({probs[0]}%)"
                if len(scores) > 0 and len(probs) > 0
                else (scores[0] if len(scores) > 0 else "-")
            )
            top2 = (
                f"{scores[1]}({probs[1]}%)"
                if len(scores) > 1 and len(probs) > 1
                else (scores[1] if len(scores) > 1 else "-")
            )
            top3 = (
                f"{scores[2]}({probs[2]}%)"
                if len(scores) > 2 and len(probs) > 2
                else (scores[2] if len(scores) > 2 else "-")
            )

            # 如果模型根本没填内容，跳过
            if (
                spf_dist == "未预测"
                and top1 == "-"
                and top2 == "-"
                and top3 == "-"
            ):
                continue

            all_data.append(
                {
                    "日期": match_date,
                    "对阵": match_name,
                    "预测模型": model_name.upper(),
                    "胜平负概率分布": spf_dist,
                    "预测比分 Top 1": top1,
                    "预测比分 Top 2": top2,
                    "预测比分 Top 3": top3,
                }
            )

    return pd.DataFrame(all_data)


# ==================== 执行与输出 ====================
if __name__ == "__main__":
    # 假设你把整合了结果的 Markdown 保存为 worldcup_predictions.md
    input_file = "worldcup_predictions.md"

    try:
        df = parse_worldcup_md(input_file)

        # 排序：先按日期，再按对阵
        df = df.sort_values(by=["日期", "对阵"])

        # 1. 导出为 Excel 方便你做后续的胜率统计和有色标记
        df.to_excel("世界杯AI预测汇总表.xlsx", index=False)
        print("📊 成功导出 Excel：[世界杯AI预测汇总表.xlsx]")

        # 2. 打印出 Markdown 格式表格，你可以直接贴回你的总文档
        print("\n📝 以下是为您梳理出的 Markdown 汇总表格：\n")
        print(df.to_markdown(index=False))

    except FileNotFoundError:
        print(
            f"❌ 未找到文件：{input_file}，请将整合好结果的 MD 文件重命名为此文件名并重试。"
        )