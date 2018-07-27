const md5 = require('md5');
module.exports = () => {
    return async function verifyCode(ctx, next) {
        if (ctx.header.sign == undefined || ctx.header.timestamp == undefined || ctx.header.sign == "" || ctx.header.timestamp == "") {
            ctx.body = ctx.helper.errHandler('请求不合法');
        } else {
            let list = [ctx.header.timestamp, ctx.app.config.md5Key];
            let data = {...ctx.query, ...ctx.request.body };
            for (let i in data) {
                list.push(data[i])
            }
            list.sort();
            list = list.join('');
            let sign = md5(list);
            if (ctx.header.sign != sign) {
                ctx.body = ctx.helper.errHandler('请求不合法');
            } else {
                await next();
            }
        }
    }
};