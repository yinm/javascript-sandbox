// https://developer.mozilla.org/ja/docs/Web/API/Document/readyState

// alternative load event
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    // do something
  }
}