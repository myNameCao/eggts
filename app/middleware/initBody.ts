export default () => {
  return async (ctx, next) => {
    ctx.setBody = (data = {}, code = 200, msg = 'success', status = true) => {
      ctx.status = code
      ctx.body = { code, status, msg, data }
    }
    await next()
  }
}
