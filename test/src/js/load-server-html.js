function loadServerHTML(container, url) {
  let xhr = new XMLHttpRequest()

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 1) {
      container.innerHTML = 'loading'
    }
    else if (xhr.readyState === 4) {
      container.innerHTML = xhr.responseText
    }
  }

  xhr.open('GET', url)
  xhr.send()
}

export { loadServerHTML }