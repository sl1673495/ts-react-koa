const Mocha = require('mocha')

const mocha = new Mocha({
  reporter: 'mochawesome',
  reporterOptions: {
    reporterDir: "./docs/mochawesome",
    reportFilename: 'mochaReportFile',
    quiet: true
  }
})

mocha.addFile(
  "./tests/server/router.spec.js"
)

mocha.run(() => {
  // 0是正确的退出
  // 1是错误的退出
  process.exit(0)
})