import { Context } from 'egg'
export default () => {
  return async (ctx: Context, next: () => Promise<any>) => {
    try {
      await next()
    } catch (error: any) {
      //   记录日志用
      ctx.app.emit('error', error, ctx)
      //   同一异常返回
      ctx.status = error.status
      ctx.body = {
        code: 500,
        // msg: error.message,
        status: false
      }
    }
  }
}
