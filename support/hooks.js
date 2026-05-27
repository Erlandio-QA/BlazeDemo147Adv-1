const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber')

setDefaultTimeout(30000)

Before(async function () {
  await this.open_browser()
})

After(async function () {
  await this.close_browser()
})