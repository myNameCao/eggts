type OPTION = {
  method?: string
}

export default () => {
  return async (ctx, next) => {
    const startTime = Date.now()
    /**
     *
     * 调用tars服务API（HTTP）
     * @param { String } url API路径
     * @param { Object } options curl的配置信息
     * @return { Object } 返回请求结果数据
     */
    ctx.axios = async (url = '', options: OPTION | undefined = {}) => {
      if (!url) {
        ctx.throw(400, '缺少请求Api路径', { code: 400201 })
      }
      const option = Object.assign(
        {
          dataType: 'json',
          contentType: 'json',
          timeout: 50 * 1000,
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
      const startTime = new Date().getTime()
      const res = await ctx.curl(url, option)
      const TcpTime = new Date().getTime() - startTime

      if (res.status !== 200) {
        ctx.throw(res.status, res.data.msg, { ...res.data })
      }
      const data = res.data?.data || {}

      ctx.logger.info(`${url}: %s`, JSON.stringify(data))

      return { TcpTime, data }
    }
    await next()

    ctx.body.RunTime = Date.now() - startTime
  }
}
