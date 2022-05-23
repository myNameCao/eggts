/*
 * @Author: hefei.cao hefei.cao@xiaoyangedu.com
 * @Date: 2022-05-21 23:19:12
 * @LastEditors: hefei.cao hefei.cao@xiaoyangedu.com
 * @LastEditTime: 2022-05-23 08:30:51
 * @FilePath: \eggts\config\config.prod.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { EggAppConfig, PowerPartial } from 'egg'

export default () => {
  const config: PowerPartial<EggAppConfig> = {}
  return config
}
