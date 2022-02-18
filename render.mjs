import puppeteer from 'puppeteer'
import path from 'path'
import fs from 'fs'
import { createServer } from 'vite'
import { exit } from 'process'

(async () => {
  const server = await createServer({
    root: path.resolve(),
    server: {
      port: 3000
    }
  })
  await server.listen()
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' })
  } catch (err) {
    console.error(err)
    server.close()
    throw new Error('page.goto/waitForSelector timed out.')
  }
  await page.evaluate(() => {
      document.querySelectorAll('script').forEach(element => {
          element.remove()
      })
  })

  const html = await page.content()
  await page.screenshot({ path: 'thumbnail.png' })
  await browser.close()

  fs.writeFile('./docs/index.html', html, () => {
    server.close()
    exit()
  })
})()

