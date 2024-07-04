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

function getChartFile(urlParams){
    let req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        console.log(req);
        if(req.readyState == XMLHttpRequest.DONE && req.status == 200){
            console.log(req.responseText);
        }
    }
    req.open("GET",`../charts/${CHARTS_ID[urlParams["chart"]]}/${urlParams["difficulty"]}.json`,true);
}

window.onload = () => {
    let urlParams = getUrlParams();
    getChartFile(urlParams);
}