/*
 * @Author: hefei.cao hefei.cao@xiaoyangedu.com
 * @Date: 2022-05-20 17:11:19
 * @LastEditors: hefei.cao hefei.cao@xiaoyangedu.com
 * @LastEditTime: 2022-05-21 23:39:18
 * @FilePath: \eggts\config\config.default.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
      enable: false,
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
  config.middleware = []

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
