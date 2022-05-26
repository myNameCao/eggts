type DataBody = {
  data: any
  TcpTime: number
}

export default () => {
  return async (ctx, next) => {
    const startTime = Date.now()
    console.log(1)
    ctx.setBody = (
      dataBody: DataBody,
      code = 200,
      msg = 'success',
      status = true
    ) => {
      ctx.status = code
      const { data, TcpTime } = dataBody
      ctx.body = { code, status, msg, TcpTime, data }
    }

    ctx.set('Content-Type', 'application/json')
    await next()

    ctx.body.RunTime = Date.now() - startTime
    console.log(0)
  }
}
