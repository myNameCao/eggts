import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app
  router.get('/api/answerSheet/list', controller.answersheet.getList)
  router.get('/api/answerSheet/getDetail', controller.answersheet.getDetail)
  router.put('/api/answerSheet/delcard', controller.answersheet.delete)
  router.post('/api/answerSheet/savecard', controller.answersheet.savecard)
}
