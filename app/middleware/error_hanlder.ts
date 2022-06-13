import { Context } from 'egg'
<<<<<<< HEAD
=======

interface ApiError {
  code: number
  message: string
}
// 这里是你自定义的中间件
>>>>>>> a5a5ef772943c7fed85640402fde006629164b62
export default () => {
  return async (ctx: Context, next: () => Promise<any>) => {
    try {
      await next()
<<<<<<< HEAD
    } catch (error: any) {
      //   记录日志用
      ctx.app.emit('error', error, ctx)
      //   同一异常返回
      ctx.status = error.status
      ctx.body = {
        code: 500,
        // msg: error.message,
=======
    } catch (error) {
      const typedError = error as ApiError
      ctx.app.emit('error', error, ctx)
      // 同一异常返回
      ctx.status = typedError.code
      ctx.body = {
        code: 500,
        msg: typedError.message,
>>>>>>> a5a5ef772943c7fed85640402fde006629164b62
        status: false
      }
    }
  }
}
