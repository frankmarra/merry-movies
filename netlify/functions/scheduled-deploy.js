const fetch = require('node-fetch')
import { schedule } from '@netlify/functions'

const BUILD_HOOK =
  'https://api.netlify.com/build_hooks/656e1f768cfecc08d5b7184b'

const handler = schedule('0 0 * * *', async () => {
  await fetch(BUILD_HOOK, {
    method: 'POST'
  }).then((response) => {
    console.log('Build hook response: ', response.json())
  })

  return {
    statusCode: 200
  }
})

export { handler }
