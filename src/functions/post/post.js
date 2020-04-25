/* eslint-disable */
const contentful = require("contentful-management")
const shortid = require("shortid")
const querystring = require("querystring")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
})

exports.handler = async function(event, context, callback) {
  try {
    const treat = querystring.parse(event.body)
    treat.id = shortid.generate()

    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID)
    const environment = await space.getEnvironment("master")
    const entry = await environment.createEntryWithId("treat", treat.id,{
      fields :{
        to:{
          "en-US": treat.to //taal, omdat ze werken met localisatiion, 1 field kan verschillende talen bevaten dus moeten we taal opgeven
        },
        from:{
          "en-US": treat.from
        },
        message:{
          "en-US": treat.message
        },
      }
    });
    await entry.publish()
  
    return callback (null, { //eerste propertie null want er is geen error
      body: JSON.stringify(entry.fields), //fields returnen omdat we dan iets zien
      statusCode: 302, //omdat we redirect gaan doen
      headers: {
        Location: `/vuistje/${treat.id}`,
      },
    })

  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
