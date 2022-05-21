/*
 * @Author: hefei.cao hefei.cao@xiaoyangedu.com
 * @Date: 2022-05-20 17:11:19
 * @LastEditors: hefei.cao hefei.cao@xiaoyangedu.com
 * @LastEditTime: 2022-05-21 14:51:53
 * @FilePath: \eggts\app\controller\test.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Controller } from 'egg'

export default class TestController extends Controller {
  public async list() {
    const { ctx, service } = this
    const result = await service.test.list('nihao')
    ctx.body = result
    ctx.status = 200
  }
  public async getuser() {
    const { ctx } = this
    ctx.body = {
      name: 'chris',
      age: 30
    }
    // 客户端保存 cookie
    ctx.cookies.set('chris_token', 'abcefg', {
      maxAge: 2000000,
      encrypt: true,
      httpOnly: true,
      signed: true
    })
    ctx.status = 200
  }

  public async getDate() {
    const { ctx } = this

    console.log(
      ctx.cookies.get('chris_token', {
        signed: false
      })
    )
    ctx.body = {
      name: [1, 2, 3],
      age: 30
    }

    ctx.status = 200
  }
}
