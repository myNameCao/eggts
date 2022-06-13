import { Controller } from 'egg'

/**
 * @controller HomeController
 */
export default class HomeController extends Controller {
  /**
   *@router get /index 路径
   *@summary 页面
   *@description 测试页面
   *@response 200 html
   */
  public async index() {
    const { ctx } = this
    return ctx.render('home.html')
  }
}
