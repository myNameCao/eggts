const JsonBody = {
  status: { type: 'boolean', required: true, example: true },
  code: { type: 'number', required: true, example: 200 },
  msg: { type: 'string', required: true, example: 'success' },
  TcpTime: { type: 'number', required: true, example: 200 },
  data: { type: 'number', required: true, example: 2 }
}
// Models
module.exports = {
  html: {},
  jsonBody: JsonBody,
  listJsonBody: {
    ...JsonBody,
    data: { type: 'number', required: true, example: [] }
  }
}
