const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // 设置响应体数据
    this.ctx.body = "Hello world"
  }

  foo() {
    this.ctx.body = 'bar'
  }
 }

 module.exports = HomeController