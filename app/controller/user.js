const Controller = require('egg').Controller;

class UserController extends Controller {
  async create() {
    const body = this.ctx.request.body;
    // 1: 数据校验 借助Validate
    this.ctx.validate({
      username: { type: "string"},
      // email: { type: "email"},
      password: { type: 'string'}
    })
    const userService = this.service.user;
   if (await userService.findByUsername(body.username)) {
     this.ctx.throw(422, '用户已存在')
   }

  //  if (await userService.findByEmail(body.email)) {
  //     this.ctx.throw(422, '已存在')
  //   }
    // 2: 保存用户
    const user = await userService.createUser(body)
    // 3: 生成token
    const token = userService.createToken({
      userId: user._id
    })
     
    // 4: 发送响应
    this.ctx.body = {
      user: {
        username: user.username,
        token
      }
    }
  }
  async login() {
    const body = this.ctx.request.body;
    
    // 1. 基本数据验证
    this.ctx.validate({
      username: { type: "string"},
      // email: { type: "email"},
      password: { type: 'string'}
    }, body)
    // 2. 校验用户是否存在
    const userService = this.service.user;
    const user = await userService.findByUsername(body.username);
    if (!user) {
      this.ctx.throw(422, '用户不存在')
    }
    // 3. 校验密码是否正确
    if (this.ctx.helper.md5(body.password) !== user.password) {
      this.ctx.throw(422, '密码不正确')
    }
    // 4. 生成token
    const token = userService.createToken({
      userId: user._id
    })

    // 5. 返回响应数据
    this.ctx.body = {
      user: {
        username: user.username,
        token
      }
    }
  }
 }

 module.exports = UserController