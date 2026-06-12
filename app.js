// Load data and initialize the application
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        initDashboard(data);
    } catch (error) {
        console.error('Error loading data:', error);
        document.getElementById('matches-container').innerHTML =
            '<p style="color: #ff6b6b; text-align: center;">加载数据失败，请刷新页面重试。</p>';
    }
});

function initDashboard(data) {
    // Update last updated time
    document.getElementById('last-updated').textContent = data.lastUpdated;

    // Render matches
    const container = document.getElementById('matches-container');
    container.innerHTML = '';

    data.matches.forEach(dateGroup => {
        const dateSection = createDateSection(dateGroup);
        container.appendChild(dateSection);
    });
}

function createDateSection(dateGroup) {
    const section = document.createElement('div');
    section.className = 'date-section';

    const header = document.createElement('h2');
    header.className = 'date-header';
    header.innerHTML = `📅 ${dateGroup.date}`;
    section.appendChild(header);

    dateGroup.matches.forEach(match => {
        const card = createMatchCard(match);
        section.appendChild(card);
    });

    return section;
}

function createMatchCard(match) {
    const card = document.createElement('div');
    card.className = 'match-card';
    card.setAttribute('data-match-id', match.id);

    // Match Header
    const header = document.createElement('div');
    header.className = 'match-header';

    const teams = document.createElement('div');
    teams.className = 'match-teams';
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
        score.className = 'actual-score';
        score.textContent = `🏆 ${match.actualScore}`;
        info.appendChild(score);
    }

    const toggleIcon = document.createElement('span');
    toggleIcon.className = 'toggle-icon';
    toggleIcon.textContent = '▼';
    info.appendChild(toggleIcon);

    header.appendChild(teams);
    header.appendChild(info);
    card.appendChild(header);

    // Predictions Container
    const predictionsContainer = document.createElement('div');
    predictionsContainer.className = 'predictions-container';

    const table = createPredictionTable(match);
    predictionsContainer.appendChild(table);

    card.appendChild(predictionsContainer);

    // Add click event to toggle predictions
    header.addEventListener('click', () => {
        predictionsContainer.classList.toggle('active');
        toggleIcon.classList.toggle('active');
    });

    return card;
}

function createPredictionTable(match) {
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

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    return table;
}
