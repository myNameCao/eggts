import { Application } from 'egg'

import testApi from './test'
import examApi from './exam'
import answersheetApi from './answersheet'

export default (app: Application) => {
  const { router } = app
  // router.get('/', controller.home.index)
  router.redirect('/', '/swagger-ui.html', 302)
  testApi(app)
  examApi(app)
  answersheetApi(app)
}
