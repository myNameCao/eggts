import { Context } from 'egg'

interface ApiError {
  code: number
  message: string
}
// 这里是你自定义的中间件
export default () => {
  return async (ctx: Context, next: () => Promise<any>) => {
    try {
      await next()
    } catch (error) {
      const typedError = error as ApiError
      ctx.app.emit('error', error, ctx)
      // 同一异常返回
      ctx.status = typedError.code
      ctx.body = {
        code: 500,
        msg: typedError.message,
        status: false
      }
    }
  }
}
