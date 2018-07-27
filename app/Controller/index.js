// app/controller/home.js
const Controller = require('egg').Controller;

class IndexController extends Controller {
    async getTest() {
        await this.ctx.service.index.getTest();
    }
}

module.exports = IndexController;