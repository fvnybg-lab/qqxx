// Quantumult X 随机 User-Agent 脚本（GitHub 远程版）
function rewriteRequest(req) {
    // 可自行扩展 UA 列表
    const uaList = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/128.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5) Chrome/127.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Linux; Android 14; SM-G998B) Chrome/128.0.0.0 Mobile Safari/537.36",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) Safari/605.1.15",
        "Mozilla/5.0 (iPad; CPU OS 17_5 like Mac OS X) Safari/605.1.15"
    ];
    const randomUA = uaList[Math.floor(Math.random() * uaList.length)];
    req.headers["user-agent"] = randomUA;
    return req;
}
// 圈X 固定入口
rewrite(rewriteRequest);
