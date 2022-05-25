import { Controller } from 'egg'

export default class answersheetController extends Controller {
  public async getList() {
    const { ctx, service } = this
    const result = await service.answersheet.getList()
    ctx.setBody(result)
  }
  public async getDetail() {
    const { ctx, service } = this
    const result = await service.answersheet.getDetail()
    ctx.setBody(result)
  }
  public async delete() {
    const { ctx, service } = this
    const result = await service.answersheet.delcard()
    ctx.setBody(result)
  }
  public async savecard() {
    const { ctx, service } = this
    const result = await service.answersheet.savecard()
    ctx.setBody(result)
  }
  public async download() {
    const { ctx, service } = this
    const result = await service.answersheet.download()

    ctx.set('Content-Type', 'application/octet-stream')
    ctx.set(
      'content-disposition',
      result.headers['content-disposition'] as string
    )
    ctx.body = result.data
  }
}
