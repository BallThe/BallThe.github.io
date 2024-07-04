// 谱面列表
const CHARTS = {
    "Aleph-0": {
        "id": "a0",
        "difficulties": ["IN"],
    },
    "Shadows": {
        "id": "shadows",
        "difficulties": ["IN"],
    }
};

// 列出谱面
function listChartsInPage() {
    let center = document.getElementById("center");
    for (let chartName in CHARTS) {
        center.innerHTML += `<h2>${chartName}</h2>`;
        let chartId = CHARTS[chartName]["id"];
        let chartDifficulties = CHARTS[chartName]["difficulties"];
        for (let _difficultyIndex in chartDifficulties){
            let chartDifficulty = chartDifficulties[_difficultyIndex];
            center.innerHTML += `<button onclick="start('${chartId}','${chartDifficulties}')">${chartDifficulty}</button>`;
        }
    }
}

// 表演动画+跳转网址
function start(chartId,chartDifficulty){
    openingAnimate();
    jumpToPlayPageWithChart(chartId,chartDifficulty);
}

// 转场动画
function openingAnimate(){

}

// 跳转谱面游玩网址
function jumpToPlayPageWithChart(chartId, chartDifficulty, ...chartParams){
    let extraParams = "";
    if (!chartParams.length){
        //  chartParams = {
        //      param1: value1,
        //      param2: value2,
        //  }
        for(let paramName in chartParams){
            let paramValue = chartParams[paramName];
            extraParams += `&${paramName}=${paramValue}`;
        }
    }
    window.location.href=`../play/play.html?chart=${chartId}&difficulty=${chartDifficulty}${extraParams}`;
}

window.onload = () => {
    listChartsInPage();
}