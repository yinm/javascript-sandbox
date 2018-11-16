function parseProtocol(url) {
  const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url)
  if (!parsedURL) {
    return false
  }
  console.log(parsedURL)

  const [, protocol, fullhost, fullpath] = parsedURL
  return protocol
}

console.log(parseProtocol('https://developer.mozilla.org/en-US/Web/JavaScript?q=aaa'))
