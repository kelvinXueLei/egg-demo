const Service = require('egg').Service;
class IndexService extends Service {
    async getTest() {
        try {
            let list = await this.app.mysql.query('');
            this.ctx.body = await this.ctx.vo.toJson({
                list
            })
        } catch (error) {
            this.ctx.body = await this.ctx.errHandler(error, true);
        }
    }
}


module.exports = IndexService;