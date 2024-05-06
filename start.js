#停止任务实例脚本需要在控制台执行
async function start(startId,endId){
    if(!startId || !endId) return 
    let nowId = startId
    while (nowId < endId) {
        await stopJob(nowId)
        nowId++
    }
}

function stopJob(id){
    return fetch("http://172.16.2.220:9003/dolphinscheduler/projects/zl_test2/executors/execute", {
        "body": "processInstanceId="+id+"&executeType=STOP",
        "cache": "default",
        "credentials": "omit",
        "headers": {
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
            "Content-Type": "application/x-www-form-urlencoded",
            "digi-middleware-auth-app": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImRtcCIsImluc2lkZSI6ZmFsc2UsInNpZCI6NDgzOTczNDM2NDQ1MjQ4fQ.qwhKIOpZzHE1k8rWa77tdOTtUaRVFjuQYYxx4WncfgE",
            "digi-middleware-auth-user": "6edfd306-09f6-4a0f-968b-3ffe5e9a3dcb",
            "digi-middleware-tenant-id": "649294760776256",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15"
        },
        "method": "POST",
        "mode": "cors",
        "redirect": "follow",
        "referrer": "http://172.16.2.220:9003/",
        "referrerPolicy": "strict-origin-when-cross-origin"
    })
}
start(83948,84109)