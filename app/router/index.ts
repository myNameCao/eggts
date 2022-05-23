import { Application } from 'egg'

import testApi from './test'
import examApi from './exam'

export default (app: Application) => {
  const { controller, router } = app
  router.get('/', controller.home.index)
  testApi(app)
  examApi(app)
}
