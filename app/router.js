module.exports = app => { // app 是Egg.js 应用实例
  const {router, controller} = app;

  // 配置路由负责
  router.prefix('/api/v1') // 设置基础路径

  router.post('/users', controller.user.create)
  router.post('/users/login', controller.user.login)
}