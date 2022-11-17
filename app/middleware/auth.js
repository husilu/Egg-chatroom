module.exports = () => {
  return async(ctx, next) => {
    console.log('ctx')
    // 1. 获取header 里面的 token数据
    let token = ctx.headers['authorization'] // Bearer空格token数据
    token = token ? token.split('Bearer ')[1] : null
    // 2. 验证token 无效 401
    if (!token) {
      ctx.throw(401)
    }
    // 3. token 有效，根据userId 获取用户数据 挂载到 ctx 对象中给后续中间件使用
    try {
      const data = ctx.service.user.verifyToken(token)
      ctx.user = await ctx.model.User.findById(data.userId)
    } catch(err) {
      ctx.throw(401)
    }
    // 4. next 执行后续中间件
    await next()
  }
}