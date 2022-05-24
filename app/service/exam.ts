import { Service } from 'egg'

export default class Test extends Service {
  public async GetAllTextbook() {
    const { ctx } = this

    console.log(ctx.url, 2222, ctx.query)
    const result = await ctx.curl(`https://qaxyexamapi.xycxedu.cn${ctx.url}`, {
      dataType: 'json',
      data: ctx.query,
      headers: {
        CXTOKEN: ctx.get('CXTOKEN')
      }
    })
    // console.log(result)
    return result.data
  }
}
