
var server = 'http://localhost:8000/'

export function getTweets () {
  return new Promise((resolve, reject) => {
    const http = new XMLHttpRequest()
    http.open('GET', server + 'api/v1/tweet/', true)
    http.setRequestHeader('Content-type', 'application/json')
    http.onreadystatechange = function () {
      if (http.readyState === 4) {
        if (http.status === 200) {
          var data = http.responseText
          resolve(JSON.parse(data))
        } else {
          reject(http)
        }
      }
    }
    http.send()
  })
}

export function postTweet (tweetMessage) {
  return new Promise((resolve, reject) => {
    const http = new XMLHttpRequest()
    http.open('POST', server + 'api/v1/tweet/', true)
    http.setRequestHeader('Content-type', 'application/json')
    http.onreadystatechange = function () {
      if (http.readyState === 4) {
        if (http.status === 200) {
          var data = http.responseText
          resolve(JSON.parse(data))
        } else {
          reject(http)
        }
      }
    }
    let postBody = JSON.stringify(tweetMessage);
    http.send(postBody)
  })
}

export default {
  getTweets,
  postTweet
}
