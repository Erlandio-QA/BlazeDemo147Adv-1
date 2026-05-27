const { setWorldConstructor} = require('@cucumber/cucumber') // adicionamos World para importar a classe
const { chromium, firefox, webkit } = require('@playwright/test')

// aqui tbm
class Base{
  async open_browser () {
    const browsers = { chromium, firefox, webkit }
    const browser_name = process.env.BROWSER || 'chromium'

    this.browser = await browsers[browser_name].launch({ headless: process.env.HEADLESS !== 'false' })
    this.context = await this.browser.newContext()
    this.page = await this.context.newPage()
  }

  async close_browser() {
    if (this.context) await this.context.close()
  }
}

setWorldConstructor(Base)