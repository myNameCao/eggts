# hackernews-async-ts

[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+

  <br>

# swagger

地址：/swagger-ui.html

### 常用注释

```ts
@Controller {ControllerName}
@Router {Mothod} {Path}
@Request {Position} {Type} {Name} {Description}
@Response {HttpStatus} {Type} {Description}
@Deprecated
@Description {Description}
@Summary {Summary}
```

```ts
// 举例
/**
 * @router get /index  路径
 * @summary 接口的小标题信息
 * @description 接口的描述信息
 * @request query integer id 对参数id的描述
 * @request query string name 对参数name的描述
 * @response 200 indexJsonBody
 */
```
