/*
 * @Author: hefei.cao hefei.cao@xiaoyangedu.com
 * @Date: 2022-05-23 12:17:05
 * @LastEditors: hefei.cao hefei.cao@xiaoyangedu.com
 * @LastEditTime: 2022-05-23 13:31:09
 * @FilePath: \eggts\app\middleware\appcookie.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Context } from 'egg'
// 这里是你自定义的中间件
export default function appcookie(): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    // 获取CXTOKEN
    const cookie = ctx.get('CXTOKEN')
    if (!cookie && ctx.url.match(/api/)) {
      ctx.body = { error: '缺少token', status: false, code: 201 }
    } else {
      await next()
    }
  }
}
