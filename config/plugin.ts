/*
 * @Author: hefei.cao hefei.cao@xiaoyangedu.com
 * @Date: 2022-05-20 16:14:23
 * @LastEditors: hefei.cao hefei.cao@xiaoyangedu.com
 * @LastEditTime: 2022-05-21 10:50:17
 * @FilePath: \eggts\config\plugin.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { EggPlugin } from 'egg'

const plugin: EggPlugin = {
  static: true,
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks'
  },
  cors: { enable: true, package: 'egg-cors' }
}

export default plugin
