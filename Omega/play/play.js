function getUrlParams() {
    var vars = {};
    var _parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (_m,key,value) => {
        vars[key] = value;
    });
    return vars;
}

const CHARTS_ID = {
    "a0": "Aleph-0",
    "shadows": "Shadows"
}

function getChartFile(){
    let urlParams = getUrlParams();
    let chartName = CHARTS_ID[urlParams["chart"]];
    let chartDifficulty = urlParams["difficulty"];
    // Fetch获取谱面
    fetch(`../charts/${chartName}/${chartDifficulty}.json`)
    .then((_responseData)=>{
        _responseData.json()
        .then((chartData)=>{
            console.log(chartData);
        });
    });
}

window.onload = () => {
    getChartFile();
}