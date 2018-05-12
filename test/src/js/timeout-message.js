function timeoutMessage(container, message, timeout) {
  container.textContent = message

  setTimeout(() => {
    container.textContent = ''
  }, timeout)
}

export { timeoutMessage }