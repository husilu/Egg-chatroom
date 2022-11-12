module.exports = () => {
  // 外层函数负责接受额外的参数
  // 返回一个中间件处理函数
  return async function errorHandler(ctx, next) {
    try {
      // 到下一个中间件
      await next()
    } catch (err) {
      // 所有的异常都在app上触发一个error事件，框架会记录一条错误日志 写在log文件夹中
      ctx.app.emit('error', err, ctx)

      const status = err.status || 500
      // 生产环境500时不将详细的错误内容返回给客户端 因为可能包含敏感信息
      const error = status === 500 && ctx.app.config.env === 'prod' ? 'Internal Server Error': err.message

      // 从error对象上读出各个属性，设置到响应中
      ctx.body = {error}
      if (status === 422) {
        ctx.body.detail = err.errors
      }
      ctx.status = status
    }
  }
}