function getUrlParams() {
    var vars = {};
    var _parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (_m, key, value) => {
        vars[key] = value;
    });
    return vars;
}

const CHARTS_ID = {
    "a0": "Aleph-0",
    "shadows": "Shadows"
}

function getChartData() {
    let urlParams = getUrlParams();
    let chartName = CHARTS_ID[urlParams["chart"]];
    let chartDifficulty = urlParams["difficulty"];

    // 返回获取chartData的Promise函数
    return new Promise((resolve, reject) => {

        // Fetch获取谱面
        fetch(`../charts/${chartName}/${chartDifficulty}.json`)
            // 返回后获取
            .then(_responseData => {
                // 因网络原因获取失败
                if(!_responseData.ok){
                    reject(new Error("Failed to Fetch chartData Because of Network Problems"));
                }
                // 将获取的值在json解析时返回
                return _responseData.json();
            })
            // 返回json解析后的chartData
            .then(chartData => {
                resolve(chartData);
            })
            .catch(err => {
                reject(err);
            });
    })
}

function loadChart() {
    let timeStartGettingChartData = new Date().getTime();
    getChartData().then(chartData => {
        let timeFinishedGettingChartData = new Date().getTime();
        console.log("获取谱面信息成功，用时",timeFinishedGettingChartData-timeStartGettingChartData,"ms");
        console.log(chartData);
    })
}

window.onload = () => {
    loadChart();
}