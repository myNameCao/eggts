/*
 * @Author: hefei.cao hefei.cao@xiaoyangedu.com
 * @Date: 2022-05-21 23:19:12
 * @LastEditors: hefei.cao hefei.cao@xiaoyangedu.com
 * @LastEditTime: 2022-05-23 15:30:55
 * @FilePath: \eggts\config\config.prod.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { EggAppConfig, PowerPartial } from 'egg'

export default () => {
  const config: PowerPartial<EggAppConfig> = {}

  config.appcookie = {
    // 是否启用中间件
    enable: true,

    // 路由为/news才使用中间件
    match: cxt => cxt.url.match(/^\/api/g),

    // 路由为/news不使用中间件
    // ignore:'/news',
    title: 'this is  middleware'
  }
  return config
}
