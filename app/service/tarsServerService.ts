import { Service } from 'egg'

export default class tarsServerService extends Service {
  host: ''
  /**
   *
   * 调用tars服务API（HTTP）
   * @param { String } url API路径
   * @param { Object } options curl的配置信息
   * @return { Object } 返回请求结果数据
   */

  async curl(url = '', options: any | undefined = {}) {
    const { ctx } = this
    if (!url) {
      ctx.throw(400, '缺少请求Api路径', { code: 400201 })
    }

    const option = Object.assign(
      {
        dataType: 'json',
        contentType: 'json',
        timeout: 10 * 1000,
        data:
          options.method?.toLocaleUpperCase() === 'POST'
            ? ctx.request.body
            : ctx.query,
        // 必须要写的
        headers: {
          CXTOKEN: ctx.get('CXTOKEN')
        }
      },
      options
    )

    const res = await ctx.curl(url, option)
    if (res.status !== 200) {
      ctx.throw(res.status, res.data.msg, { ...res.data })
    }
    return res.data?.data || {}
  }
}
