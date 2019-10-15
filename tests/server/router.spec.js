const axios = require('axios')

describe("基础Service接口测试", () => {
  it ("getHello测试", (done) => {
    axios.get('http://localhost:3000/api/hello')
      .then((resp) => {
        const result =  resp.data.data
        if (result === 'Hello World!') {
          done()
        }
      })
  })
})