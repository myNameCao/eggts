import { Service } from 'egg'

const CONF = {
  host: 'https://xyapitest.xycxedu.cn',
  path: {
    list: '/api/answer/sheet/getAnswerSheetByPage'
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
    // console.log(result)
    return result.data?.data || {}
  }
}
