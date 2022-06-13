import { Controller } from 'egg'

/**
 * @controller answersheetController
 */
export default class answersheetController extends Controller {
  /**
   *@router get /api/answerSheet/list  路径
   *@summary 答题卡列表
   *@description 获取答题卡的列表
   *@request query integer pageSize 页容量
   *@request query string pageNumber 当前页码
   *@response 200 indexJsonBody
   */
  public async getList() {
    const listRule = {
      pageSize: 'string',
      pageNumber: 'string'
    }
    const { ctx, service } = this

    ctx.validate(listRule, ctx.query)
    const result = await service.answersheet.getList()
    ctx.setBody(result)
  }

  /**
   *@router get /api/answerSheet/getDetail  路径
   *@summary 答题卡详情
   *@description 获取某一个答题卡的详情
   *@request query integer asId 答题卡id
   *@response 200 indexJsonBody
   */
  public async getDetail() {
    const { ctx, service } = this
    const result = await service.answersheet.getDetail()
    ctx.setBody(result)
  }

  /**
   *@router delete /api/answerSheet/delete  路径
   *@summary 答题卡删除
   *@description 删除某一个答题卡
   *@request query integer asId 答题卡id
   *@response 200 indexJsonBody
   */
  public async delete() {
    const { ctx, service } = this
    const result = await service.answersheet.delcard()
    ctx.setBody(result)
  }
  /**
   *@router post /api/answerSheet/savecard  路径
   *@summary 答题卡保存
   *@description 保存某一个答题卡
   *@request param model body  答题卡信息
   *@response 200 indexJsonBody
   */
  public async savecard() {
    const { ctx, service } = this
    const result = await service.answersheet.savecard()
    ctx.setBody(result)
  }

  /**
   *@router get /api/answerSheet/card  路径
   *@summary 答题卡下载
   *@description 下载某一个答题卡
   *@request query integer asId 答题卡id
   *@response 200 indexJsonBody
   */
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
