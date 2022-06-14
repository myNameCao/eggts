import { Context } from 'egg'
// 这里是你自定义的中间件
export default () => {
  return async (ctx: Context, next: () => Promise<any>) => {
    // 获取CXTOKEN
    const cookie = ctx.get('CXTOKEN')
    if (!cookie) {
      return ctx.setBody({ data: cookie }, 201, 'error', false)
    }
    await next()
  }
}
