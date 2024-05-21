//This code is will schedule a cron job to take place every day that will redeploy the page so the date updates.
//Uncomment next year before launching.

// import fetch from 'node-fetch'
// import { schedule } from '@netlify/functions'

// const BUILD_HOOK =
//   'https://api.netlify.com/build_hooks/656e1f768cfecc08d5b7184b'

// const handler = schedule('0 5 * * *', async () => {
//   await fetch(BUILD_HOOK, {
//     method: 'POST'
//   }).then((response) => {
//     console.log('Build hook response: ', response)
//   })

//   return {
//     statusCode: 200
//   }
// })

// export { handler }
