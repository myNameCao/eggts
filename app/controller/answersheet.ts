import { Controller } from 'egg'

export default class answersheetController extends Controller {
  public async getList() {
    const { ctx, service } = this
    console.log(1111)
    const result = await service.answersheet.getList()
    ctx.setBody(result)
  }
}
