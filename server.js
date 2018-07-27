// server.js
const egg = require('egg');
console.log(process.argv[2]);
// const workers = Number(process.argv[2] || require('os').cpus().length);
egg.startCluster({
    workers: 1,
    baseDir: __dirname,
});