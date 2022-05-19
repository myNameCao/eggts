import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  router.post('/api/test/list', controller.test.list)
  router.post('/api/test/getuser', controller.test.getuser)
  router.post('/api/test/getDate', controller.test.getDate)
}
