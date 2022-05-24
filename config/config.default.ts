import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1652866071961_302'

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
      '.html': 'nunjucks'
    }
  }
  config.security = {
    csrf: {
      enable: true,
      headerName: 'x-csrf-token' // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
    }
    // domainWhiteList: ['http://chris.xycxedu.cn']
  }

  config.cors = {
    origin: ctx => ctx.get('origin'),
    allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATCH',
    credentials: true
  }

  // add your egg config in here
  config.middleware = ['initBody', 'appcookie']

  config.appcookie = {
    // 是否启用中间件
    enable: true,

    // 路由为/news才使用中间件
    match: cxt => cxt.url.match(/^\/api/g),

    // 路由为/news不使用中间件
    // ignore:'/news',
    title: 'this is  middleware'
  }

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
  }

  // the return config will combines to EggAppConfig

  return {
    ...config,
    ...bizConfig
  }
}
