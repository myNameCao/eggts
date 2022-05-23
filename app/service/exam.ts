import { Service } from 'egg'

/**
 * Test Service
 */
export default class Test extends Service {
  public async GetAllTextbook() {
    const { ctx } = this

    console.log(ctx.query)

    const result = await ctx.curl(
      'https://qaxyexamapi.xycxedu.cn/api/MyQuestion/GetAllTextbook?subjectId=26&sourceType=1&bookType=0'
    )
    // console.log()
    return result.data
  }
}
