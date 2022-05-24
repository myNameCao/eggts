import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app
  router.get('/api/test/GetAllTextbook', controller.exam.GetAllTextbook)
  router.post('/api/test/getuser', controller.test.getuser)
  router.post('/api/test/getDate', controller.test.getDate)
}
