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

  config.logger = {
    consoleLevel: 'WARN'
  }
  config.cors = {
    origin: ctx => ctx.get('origin'),
    allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATCH',
    credentials: true
  }

  // add your egg config in here
<<<<<<< HEAD
  config.middleware = ['axios', 'initBody', 'appcookie']
=======

  config.middleware = ['axios', 'initBody', 'appcookie', 'errorHanlder']
>>>>>>> a5a5ef772943c7fed85640402fde006629164b62

  config.initBody = {
    // 是否启用中间件
    enable: true,

    // 路由为/news才使用中间件
    match: cxt => {
      const reg = /^\/api/g
      return reg.test(cxt.url)
    },

    // 路由为/news不使用中间件
    // ignore:'/news',
    title: 'this is  middleware'
  }

  config.axios = {
    // 是否启用中间件

    // 路由为/news才使用中间件
    match: cxt => {
      const reg = /^\/api/g
      return reg.test(cxt.url)
    }

    // 路由为/news不使用中间件
    // ignore:'/news',
  }
  config.appcookie = {
    // 是否启用中间件
    enable: true,

    // 路由为/news才使用中间件
    match: cxt => {
      const reg = /^\/api/g
      return reg.test(cxt.url)
    },

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
