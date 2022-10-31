module.exports = app => { // app 是Egg.js 应用实例
  const {router, controller} = app;

  // 配置路由负责
  router.get('/', controller.home.index)
  router.get('/foo', controller.home.foo)
}