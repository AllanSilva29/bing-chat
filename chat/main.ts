import dotenv from 'dotenv-safe'
import { oraPromise } from 'ora'
import promptSync from 'prompt-sync'

import { BingChat } from '../src'

dotenv.config()

const prompt = promptSync()

/**
 * Demo CLI for testing basic functionality.
 *
 * ```
 * npx tsx demos/demo.ts
 * ```
 */
async function main() {
  const api = new BingChat({ cookie: process.env.BING_COOKIE })

  //const prompt = 'How is the weather in Curitiba today?'
  const question = prompt('Question: ')

  const res = await oraPromise(api.sendMessage(question), {
    text: question
  })
  console.log(res.text)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
