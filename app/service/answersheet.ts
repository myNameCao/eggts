import { Service } from 'egg'

const CONF = {
  host: 'https://xyapitest.xycxedu.cn',
  path: {
    list: '/api/answer/sheet/getAnswerSheetByPage',
    delete: '/api/answer/sheet/deleteAnswerSheet',
    savecard: '/api/answer/sheet/saveOrUpdateAnswerSheet',
    downloadCard: '/api/answer/sheet/downloadPdf',
    getDetail: '/api/answer/sheet/getAnswerSheet'
  }
}

export default class answerSheet extends Service {
  async getList() {
    const { service } = this
    const result = await service.tarsServerService.curl(
      `${CONF.host}${CONF.path.list}`
    )

    return result
  }
  public async getDetail() {
    const { service } = this
    const result = await service.tarsServerService.curl(
      `${CONF.host}${CONF.path.getDetail}`
    )
    return result
  }
  public async delcard() {
    const { service } = this
    const result = await service.tarsServerService.curl(
      `${CONF.host}${CONF.path.delete}`
    )
    return result
  }
  public async savecard() {
    const { service } = this
    const result = await service.tarsServerService.curl(
      `${CONF.host}${CONF.path.savecard}`,
      {
        method: 'POST'
      }
    )
    return result
  }
  public async download() {
    const { ctx } = this
    const { asId } = ctx.query
    const result = await ctx.curl(`${CONF.host}${CONF.path.downloadCard}`, {
      data: { asId },
      dataType: 'application/octet-stream',
      timeout: 50000,
      headers: {
        CXTOKEN: ctx.query.CXTOKEN
      }
    })
    return result || {}
  }
}
