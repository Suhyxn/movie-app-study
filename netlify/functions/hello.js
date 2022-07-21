exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'SUHYXN',
      age: 23,
      email: 'momentomori21489@gmail.com'
    })
  }
}