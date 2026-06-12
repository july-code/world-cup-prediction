// Embedded data
const worldCupData = {
  "lastUpdated": "2026年6月12日",
  "models": ["Gemini", "GPT", "DeepSeek", "智谱"],
  "statistics": {
    "totalPredictions": 4,
    "completedMatches": 2,
    "pendingMatches": 20,
    "modelCount": 4
  },
  "matches": [
    {
      "date": "2026年6月11日",
      "dateKey": "20260611",
      "matches": [
        {
          "id": "mexico-vs-south-africa",
          "homeTeam": "墨西哥",
          "homeFlag": "🇲🇽",
          "awayTeam": "南非",
          "awayFlag": "🇿🇦",
          "group": "A组",
          "actualScore": "2-0",
          "hasResult": true,
          "predictions": [
            {
              "model": "Gemini",
              "homeWin": 64,
              "draw": 23,
              "awayWin": 13,
              "top1": {"score": "2-0", "probability": 26, "hit": true},
              "top2": {"score": "2-1", "probability": 18, "hit": false},
              "top3": {"score": "1-0", "probability": 15, "hit": false}
            },
            {
              "model": "GPT",
              "homeWin": 63,
              "draw": 24,
              "awayWin": 13,
              "top1": {"score": "1-0", "probability": 18, "hit": false},
              "top2": {"score": "2-0", "probability": 15, "hit": true},
              "top3": {"score": "1-1", "probability": 13, "hit": false}
            },
            {
              "model": "DeepSeek",
              "homeWin": 71.2,
              "draw": 20.5,
              "awayWin": 8.3,
              "top1": {"score": "2-0", "probability": 32.4, "hit": true},
              "top2": {"score": "1-0", "probability": 26.1, "hit": false},
              "top3": {"score": "2-1", "probability": 18.7, "hit": false}
            },
            {
              "model": "智谱",
              "homeWin": 72,
              "draw": 20,
              "awayWin": 8,
              "top1": {"score": "2-0", "probability": 31, "hit": true},
              "top2": {"score": "2-1", "probability": 26, "hit": false},
              "top3": {"score": "1-0", "probability": 15, "hit": false}
            }
          ]
        },
        {
          "id": "korea-vs-czech",
          "homeTeam": "韩国",
          "homeFlag": "🇰🇷",
          "awayTeam": "捷克",
          "awayFlag": "🇨🇿",
          "group": "A组",
          "actualScore": "2-1",
          "hasResult": true,
          "predictions": [
            {
              "model": "Gemini",
              "homeWin": 38,
              "draw": 31,
              "awayWin": 31,
              "top1": {"score": "1-1", "probability": 16, "hit": false},
              "top2": {"score": "2-1", "probability": 13, "hit": true},
              "top3": {"score": "1-2", "probability": 11, "hit": false}
            },
            {
              "model": "GPT",
              "homeWin": 45,
              "draw": 28,
              "awayWin": 27,
              "top1": {"score": "1-0", "probability": 17, "hit": false},
              "top2": {"score": "1-1", "probability": 15, "hit": false},
              "top3": {"score": "2-1", "probability": 12, "hit": true}
            },
            {
              "model": "DeepSeek",
              "homeWin": 38.7,
              "draw": 34.2,
              "awayWin": 27.1,
              "top1": {"score": "1-1", "probability": 28.3, "hit": false},
              "top2": {"score": "1-0", "probability": 19.5, "hit": false},
              "top3": {"score": "0-1", "probability": 14.8, "hit": false}
            },
            {
              "model": "智谱",
              "homeWin": 38,
              "draw": 35,
              "awayWin": 27,
              "top1": {"score": "1-1", "probability": 21, "hit": false},
              "top2": {"score": "1-2", "probability": 17, "hit": false},
              "top3": {"score": "2-1", "probability": 14, "hit": true}
            }
          ]
        }
      ]
    },
    {
      "date": "2026年6月12日",
      "dateKey": "20260612",
      "matches": [
        {
          "id": "canada-vs-bosnia",
          "homeTeam": "加拿大",
          "homeFlag": "🇨🇦",
          "awayTeam": "波黑",
          "awayFlag": "🇧🇦",
          "group": "B组",
          "actualScore": null,
          "hasResult": false,
          "predictions": [
            {
              "model": "Gemini",
              "homeWin": 48,
              "draw": 29,
              "awayWin": 23,
              "top1": {"score": "2-1", "probability": 19, "hit": null},
              "top2": {"score": "1-1", "probability": 15, "hit": null},
              "top3": {"score": "1-0", "probability": 12, "hit": null}
            },
            {
              "model": "GPT",
              "homeWin": 52,
              "draw": 27,
              "awayWin": 21,
              "top1": {"score": "1-0", "probability": 19, "hit": null},
              "top2": {"score": "1-1", "probability": 15, "hit": null},
              "top3": {"score": "2-1", "probability": 12, "hit": null}
            },
            {
              "model": "DeepSeek",
              "homeWin": 48.3,
              "draw": 32.5,
              "awayWin": 19.2,
              "top1": {"score": "1-0", "probability": 29.5, "hit": null},
              "top2": {"score": "1-1", "probability": 25.8, "hit": null},
              "top3": {"score": "0-0", "probability": 15.2, "hit": null}
            },
            {
              "model": "智谱",
              "homeWin": 48.3,
              "draw": 32.5,
              "awayWin": 19.2,
              "top1": {"score": "1-0", "probability": 29.5, "hit": null},
              "top2": {"score": "1-1", "probability": 25.8, "hit": null},
              "top3": {"score": "0-0", "probability": 15.2, "hit": null}
            }
          ]
        },
        {
          "id": "usa-vs-paraguay",
          "homeTeam": "美国",
          "homeFlag": "🇺🇸",
          "awayTeam": "巴拉圭",
          "awayFlag": "🇵🇾",
          "group": "D组",
          "actualScore": null,
          "hasResult": false,
          "predictions": [
            {
              "model": "Gemini",
              "homeWin": 53,
              "draw": 28,
              "awayWin": 19,
              "top1": {"score": "2-1", "probability": 21, "hit": null},
              "top2": {"score": "1-0", "probability": 17, "hit": null},
              "top3": {"score": "1-1", "probability": 14, "hit": null}
            },
            {
              "model": "GPT",
              "homeWin": 54,
              "draw": 26,
              "awayWin": 20,
              "top1": {"score": "2-1", "probability": 17, "hit": null},
              "top2": {"score": "1-0", "probability": 15, "hit": null},
              "top3": {"score": "1-1", "probability": 13, "hit": null}
            },
            {
              "model": "DeepSeek",
              "homeWin": 54.1,
              "draw": 27.6,
              "awayWin": 18.3,
              "top1": {"score": "2-0", "probability": 30.3, "hit": null},
              "top2": {"score": "1-0", "probability": 26.5, "hit": null},
              "top3": {"score": "1-1", "probability": 18.7, "hit": null}
            },
            {
              "model": "智谱",
              "homeWin": 62,
              "draw": 26,
              "awayWin": 12,
              "top1": {"score": "2-0", "probability": 27, "hit": null},
              "top2": {"score": "2-1", "probability": 22, "hit": null},
              "top3": {"score": "1-0", "probability": 13, "hit": null}
            }
          ]
        }
      ]
    }
  ],
  "pendingMatches": [
    {"date": "6月13日", "homeTeam": "卡塔尔", "homeFlag": "🇶🇦", "awayTeam": "瑞士", "awayFlag": "🇨🇭", "group": "B组"},
    {"date": "6月13日", "homeTeam": "巴西", "homeFlag": "🇧🇷", "awayTeam": "摩洛哥", "awayFlag": "🇲🇦", "group": "C组"},
    {"date": "6月13日", "homeTeam": "海地", "homeFlag": "🇭🇹", "awayTeam": "苏格兰", "awayFlag": "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "group": "C组"},
    {"date": "6月13日", "homeTeam": "澳大利亚", "homeFlag": "🇦🇺", "awayTeam": "土耳其", "awayFlag": "🇹🇷", "group": "D组"},
    {"date": "6月14日", "homeTeam": "德国", "homeFlag": "🇩🇪", "awayTeam": "库拉索", "awayFlag": "🇨🇼", "group": "E组"},
    {"date": "6月14日", "homeTeam": "荷兰", "homeFlag": "🇳🇱", "awayTeam": "日本", "awayFlag": "🇯🇵", "group": "F组"},
    {"date": "6月14日", "homeTeam": "科特迪瓦", "homeFlag": "🇨🇮", "awayTeam": "厄瓜多尔", "awayFlag": "🇪🇨", "group": "E组"},
    {"date": "6月14日", "homeTeam": "瑞典", "homeFlag": "🇸🇪", "awayTeam": "突尼斯", "awayFlag": "🇹🇳", "group": "F组"},
    {"date": "6月15日", "homeTeam": "西班牙", "homeFlag": "🇪🇸", "awayTeam": "佛得角", "awayFlag": "🇨🇻", "group": "H组"},
    {"date": "6月15日", "homeTeam": "比利时", "homeFlag": "🇧🇪", "awayTeam": "埃及", "awayFlag": "🇪🇬", "group": "G组"},
    {"date": "6月15日", "homeTeam": "沙特阿拉伯", "homeFlag": "🇸🇦", "awayTeam": "乌拉圭", "awayFlag": "🇺🇾", "group": "H组"},
    {"date": "6月15日", "homeTeam": "伊朗", "homeFlag": "🇮🇷", "awayTeam": "新西兰", "awayFlag": "🇳🇿", "group": "G组"},
    {"date": "6月16日", "homeTeam": "法国", "homeFlag": "🇫🇷", "awayTeam": "塞内加尔", "awayFlag": "🇸🇳", "group": "I组"},
    {"date": "6月16日", "homeTeam": "伊拉克", "homeFlag": "🇮🇶", "awayTeam": "挪威", "awayFlag": "🇳🇴", "group": "I组"},
    {"date": "6月16日", "homeTeam": "阿根廷", "homeFlag": "🇦🇷", "awayTeam": "阿尔及利亚", "awayFlag": "🇩🇿", "group": "J组"},
    {"date": "6月16日", "homeTeam": "奥地利", "homeFlag": "🇦🇹", "awayTeam": "约旦", "awayFlag": "🇯🇴", "group": "J组"},
    {"date": "6月17日", "homeTeam": "葡萄牙", "homeFlag": "🇵🇹", "awayTeam": "刚果民主共和国", "awayFlag": "🇨🇩", "group": "K组"},
    {"date": "6月17日", "homeTeam": "英格兰", "homeFlag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "awayTeam": "克罗地亚", "awayFlag": "🇭🇷", "group": "L组"},
    {"date": "6月17日", "homeTeam": "加纳", "homeFlag": "🇬🇭", "awayTeam": "巴拿马", "awayFlag": "🇵🇦", "group": "L组"},
    {"date": "6月17日", "homeTeam": "乌兹别克斯坦", "homeFlag": "🇺🇿", "awayTeam": "哥伦比亚", "awayFlag": "🇨🇴", "group": "K组"}
  ],
  "modelAccuracy": [
    {
      "model": "Gemini",
      "winLossAccuracy": "2/2 (100%)",
      "scoreHits": "2/2",
      "top1Hits": 1,
      "top2Hits": 1,
      "top3Hits": 0
    },
    {
      "model": "GPT",
      "winLossAccuracy": "2/2 (100%)",
      "scoreHits": "2/2",
      "top1Hits": 0,
      "top2Hits": 1,
      "top3Hits": 1
    },
    {
      "model": "DeepSeek",
      "winLossAccuracy": "1/2 (50%)",
      "scoreHits": "1/2",
      "top1Hits": 1,
      "top2Hits": 0,
      "top3Hits": 0
    },
    {
      "model": "智谱",
      "winLossAccuracy": "2/2 (100%)",
      "scoreHits": "2/2",
      "top1Hits": 1,
      "top2Hits": 0,
      "top3Hits": 1
    }
  ]
};

// Initialize the results summary page
document.addEventListener('DOMContentLoaded', () => {
    initResultsSummary(worldCupData);
});

function initResultsSummary(data) {
    // Update last updated time
    document.getElementById('last-updated').textContent = data.lastUpdated;

    // Render statistics
    renderStatistics(data.statistics);

    // Render match results
    renderMatchResults(data.matches);

    // Render model accuracy
    renderModelAccuracy(data.modelAccuracy);

    // Render pending matches
    renderPendingMatches(data.pendingMatches);
}

function renderStatistics(stats) {
    const container = document.getElementById('statistics-container');
    container.innerHTML = `
        <div class="stat-card">
            <div class="stat-number">${stats.totalPredictions}</div>
            <div class="stat-label">已完成预测</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">${stats.completedMatches}</div>
            <div class="stat-label">已有比赛结果</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">${stats.pendingMatches}</div>
            <div class="stat-label">待填充预测</div>
        </div>
    `;
}

function renderMatchResults(matches) {
    const container = document.getElementById('results-container');
    container.innerHTML = '';

    matches.forEach(dateGroup => {
        const section = document.createElement('div');
        section.className = 'date-section';

        const header = document.createElement('h2');
        header.className = 'date-header';
        header.innerHTML = `📅 ${dateGroup.date}`;
        section.appendChild(header);

        dateGroup.matches.forEach(match => {
            const card = createResultCard(match);
            section.appendChild(card);
        });

        container.appendChild(section);
    });
}

function createResultCard(match) {
    const card = document.createElement('div');
    card.className = 'result-card';

    // Result Header
    const header = document.createElement('div');
    header.className = 'result-header';

    const teams = document.createElement('div');
    teams.className = 'result-teams';
    teams.innerHTML = `
        <span class="team">
            <span class="flag">${match.homeFlag}</span>
            <span>${match.homeTeam}</span>
        </span>
        <span class="vs">vs</span>
        <span class="team">
            <span>${match.awayTeam}</span>
            <span class="flag">${match.awayFlag}</span>
        </span>
    `;

    const info = document.createElement('div');
    info.className = 'match-info';

    const groupBadge = document.createElement('span');
    groupBadge.className = 'group-badge';
    groupBadge.textContent = match.group;
    info.appendChild(groupBadge);

    if (match.hasResult) {
        const score = document.createElement('span');
        score.className = 'result-score';
        score.textContent = `🏆 ${match.actualScore}`;
        info.appendChild(score);
    }

    header.appendChild(teams);
    header.appendChild(info);
    card.appendChild(header);

    // Predictions Container
    const predictionsContainer = document.createElement('div');
    predictionsContainer.className = 'predictions-container';

    const table = createResultTable(match);
    predictionsContainer.appendChild(table);

    card.appendChild(predictionsContainer);

    // Add click event to toggle predictions
    header.addEventListener('click', () => {
        predictionsContainer.classList.toggle('active');
    });

    return card;
}

function createResultTable(match) {
    const table = document.createElement('table');
    table.className = 'prediction-table';

    // Table Header
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>模型</th>
            <th>主胜概率</th>
            <th>平局概率</th>
            <th>客胜概率</th>
            <th>预测比分Top1</th>
            <th>预测比分Top2</th>
            <th>预测比分Top3</th>
            <th>命中情况</th>
        </tr>
    `;
    table.appendChild(thead);

    // Table Body
    const tbody = document.createElement('tbody');

    match.predictions.forEach(pred => {
        const row = document.createElement('tr');

        // Model Name
        const modelCell = document.createElement('td');
        modelCell.className = 'model-name';
        modelCell.textContent = pred.model;
        row.appendChild(modelCell);

        // Probabilities
        const homeWinCell = document.createElement('td');
        homeWinCell.className = 'probability home-win';
        homeWinCell.textContent = `${pred.homeWin}%`;
        row.appendChild(homeWinCell);

        const drawCell = document.createElement('td');
        drawCell.className = 'probability draw';
        drawCell.textContent = `${pred.draw}%`;
        row.appendChild(drawCell);

        const awayWinCell = document.createElement('td');
        awayWinCell.className = 'probability away-win';
        awayWinCell.textContent = `${pred.awayWin}%`;
        row.appendChild(awayWinCell);

        // Score Predictions
        [pred.top1, pred.top2, pred.top3].forEach((score, index) => {
            const scoreCell = document.createElement('td');
            scoreCell.className = 'score-prediction';

            if (score.hit === true) {
                scoreCell.classList.add('hit');
                scoreCell.innerHTML = `${score.score} (${score.probability}%) <span class="hit-icon">✅</span>`;
            } else if (score.hit === false) {
                scoreCell.innerHTML = `${score.score} (${score.probability}%) <span class="miss-icon">❌</span>`;
            } else {
                scoreCell.textContent = `${score.score} (${score.probability}%)`;
            }

            row.appendChild(scoreCell);
        });

        // Hit Summary
        const hitCell = document.createElement('td');
        hitCell.className = 'hit-summary';

        if (match.hasResult) {
            const hits = [pred.top1, pred.top2, pred.top3].filter(s => s.hit === true).length;
            if (hits > 0) {
                hitCell.innerHTML = `<span class="hit-icon">✅ ${hits}个命中</span>`;
            } else {
                hitCell.innerHTML = `<span class="miss-icon">❌ 未命中</span>`;
            }
        } else {
            hitCell.textContent = '-';
        }

        row.appendChild(hitCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    return table;
}

function renderModelAccuracy(accuracy) {
    const container = document.getElementById('accuracy-container');
    container.innerHTML = `
        <div class="accuracy-section">
            <h2 class="section-header">🎯 预测准确率统计（基于已有结果）</h2>
            <table class="accuracy-table">
                <thead>
                    <tr>
                        <th>排名</th>
                        <th>模型</th>
                        <th>胜负预测准确率</th>
                        <th>比分命中次数</th>
                        <th>Top1 命中</th>
                        <th>Top2 命中</th>
                        <th>Top3 命中</th>
                    </tr>
                </thead>
                <tbody>
                    ${accuracy.map((model, index) => `
                        <tr>
                            <td>${index === 0 ? '<span class="rank-badge">🏅</span>' : ''}${index + 1}</td>
                            <td class="model-name">${model.model}</td>
                            <td class="${model.winLossAccuracy.includes('100%') ? 'accuracy-highlight' : ''}">${model.winLossAccuracy}</td>
                            <td class="${model.scoreHits.includes('2/2') ? 'accuracy-highlight' : ''}">${model.scoreHits}</td>
                            <td>${model.top1Hits}</td>
                            <td>${model.top2Hits}</td>
                            <td>${model.top3Hits}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function renderPendingMatches(pendingMatches) {
    const container = document.getElementById('pending-container');
    container.innerHTML = `
        <div class="pending-section">
            <h2 class="section-header">📋 未填充预测的比赛（仅框架）</h2>
            <table class="pending-table">
                <thead>
                    <tr>
                        <th>日期</th>
                        <th>对阵</th>
                        <th>分组</th>
                        <th>状态</th>
                    </tr>
                </thead>
                <tbody>
                    ${pendingMatches.map(match => `
                        <tr>
                            <td>${match.date}</td>
                            <td>
                                <span class="team">
                                    <span class="flag">${match.homeFlag}</span>
                                    <span>${match.homeTeam}</span>
                                </span>
                                vs
                                <span class="team">
                                    <span>${match.awayTeam}</span>
                                    <span class="flag">${match.awayFlag}</span>
                                </span>
                            </td>
                            <td>${match.group}</td>
                            <td><span class="pending-icon">⏳ 待填充</span></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}
