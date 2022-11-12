const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // 设置响应体数据
    const { ctx } = this
    const User = this.app.model.User
     // save 方法就是保存到数据库 是异步的
    await new User({
      userName: 'husilu',
      password: '123'
    }).save();
    ctx.body = 'hi egg'
  }

  foo() {
    this.ctx.body = 'bar'
  }
 }

 module.exports = HomeController