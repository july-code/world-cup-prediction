// Load data and initialize the results summary page
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        initResultsSummary(data);
    } catch (error) {
        console.error('Error loading data:', error);
        document.getElementById('results-container').innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <p style="color: #ff6b6b; margin-bottom: 1rem;">加载数据失败</p>
                <p style="color: #b0b0b0; font-size: 0.9rem;">
                    请使用本地服务器打开此页面：<br>
                    <code style="color: #00ff88;">python server.py</code><br>
                    然后访问 <a href="http://localhost:8000" style="color: #ffd700;">http://localhost:8000</a>
                </p>
            </div>
        `;
    }
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
