import { Controller } from 'egg'

export default class TestController extends Controller {
  public async list() {
    const { ctx, service } = this
    const result = await service.test.list('nihao')
    ctx.setBody(result)
  }
  public async getuser() {
    const { ctx } = this
    ctx.setBody({
      name: 'chris',
      age: 30
    })

    // 客户端保存 cookie
    ctx.cookies.set('chris_token', 'abcefg', {
      maxAge: 2000000,
      encrypt: true,
      httpOnly: true,
      signed: true
    })
  }

  public async getDate() {
    const { ctx } = this

    ctx.setbody({
      name: [1, 2, 3],
      age: 30
    })
  }
}
