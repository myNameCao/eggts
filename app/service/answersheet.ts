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
  public async getList() {
    const { ctx } = this
    const result = await ctx.curl(`${CONF.host}${CONF.path.list}`, {
      dataType: 'json',
      data: ctx.query,
      headers: {
        CXTOKEN: ctx.get('CXTOKEN')
      }
    })
    return result.data?.data || {}
  }
  public async getDetail() {
    const { ctx } = this
    const result = await ctx.curl(`${CONF.host}${CONF.path.getDetail}`, {
      dataType: 'json',
      data: ctx.query,
      headers: {
        CXTOKEN: ctx.get('CXTOKEN')
      }
    })
    return result.data?.data || {}
  }
  public async delcard() {
    const { ctx } = this
    const result = await ctx.curl(`${CONF.host}${CONF.path.delete}`, {
      dataType: 'json',
      data: ctx.query,
      headers: {
        CXTOKEN: ctx.get('CXTOKEN')
      }
    })
    return result.data?.data || {}
  }
  public async savecard() {
    const { ctx } = this
    const result = await ctx.curl(`${CONF.host}${CONF.path.savecard}`, {
      method: 'POST',
      dataType: 'json',
      data: ctx.request.body,
      contentType: 'json',
      headers: {
        CXTOKEN: ctx.get('CXTOKEN')
      }
    })
    return result.data || ''
  }
  public async download() {
    const { ctx } = this
    const { asId } = ctx.query
    const result = await ctx.curl(`${CONF.host}${CONF.path.downloadCard}`, {
      streaming: true,
      data: { asId },
      headers: {
        CXTOKEN: ctx.query.CXTOKEN
      }
    })
    console.log(result, 111)
    return result.data || ''
  }
}
