type DataBody = {
  data: any
  TcpTime: number
}
export default () => {
  return async (ctx, next) => {
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
  }
}
