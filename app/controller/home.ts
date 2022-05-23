/*
 * @Author: hefei.cao hefei.cao@xiaoyangedu.com
 * @Date: 2022-05-21 23:19:12
 * @LastEditors: hefei.cao hefei.cao@xiaoyangedu.com
 * @LastEditTime: 2022-05-21 23:34:16
 * @FilePath: \eggts\app\controller\home.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Controller } from 'egg'

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this
    return ctx.render('home.html')
  }
}
