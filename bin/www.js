#!/usr/local/bin node

const result = {
  data: 'ssh',
  result: {
    title: '月薪3w' 
  }
}

const json2ts = require('json2ts')

const tsRes = json2ts.convert(JSON.stringify(result))
console.log('tsRes: ', tsRes);