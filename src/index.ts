import {
  NotifiClient,
  NotifiEnvironment,
  createAxiosInstance,
} from '@notifi-network/notifi-node'
import axios from 'axios'

const env: NotifiEnvironment = 'Development'
const axiosInstance = createAxiosInstance(axios, env)
const client = new NotifiClient(axiosInstance)


// Obtain token
const getToken = async () => {
  const {
    token,
    expiry
  } = await client.logIn({ sid: 'YOUR_SID', secret: 'YOUR_SECRET' })
  // console.log(token, expiry)
  return token
}


// Use the token and the user ID to subscribe the user to Broadcast messages
const sendBcastMsg = async () => {

  const broadcastMessage = await client.sendBroadcastMessage(await getToken(), {
    topicName: 'YOUR_TOPIC_NAME',
    variables: [
      {
        key: 'message',
        value: "YOUR_MESSAGE",
      },
      {
        key: 'subject',
        value: 'YOUR_SUBJECT',
      },
    ],
  })

}

sendBcastMsg()
