import { EggPlugin } from 'egg'

const plugin: EggPlugin = {
  static: true,
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks'
  },
  swaggerdoc: {
    enable: true,
    package: 'egg-swagger-doc'
  },
  validate: {
    enable: true,
    package: 'egg-validate'
  },
  cors: { enable: true, package: 'egg-cors' }
}

export default plugin
