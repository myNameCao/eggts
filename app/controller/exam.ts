import { Controller } from 'egg'

export default class TestController extends Controller {
  public async GetAllTextbook() {
    const { ctx, service } = this
    const result = await service.exam.GetAllTextbook('')
    ctx.setBody(result)
  }
}
