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
      httpOnly: true
    })
    ctx.status = 200
  }

  public async getDate() {
    const { ctx } = this
    ctx.body = {
      name: [1, 2, 3],
      age: 30
    }

    ctx.status = 200
  }
}
