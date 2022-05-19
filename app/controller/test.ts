import { Controller } from 'egg'

export default class TestController extends Controller {
  public async list() {
    const { ctx, service } = this
    const result = await service.test.list(ctx.query.name)
    ctx.body = result
    ctx.status = 201
  }
}
