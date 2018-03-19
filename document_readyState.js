// https://developer.mozilla.org/ja/docs/Web/API/Document/readyState

// alternative DOMContentLoaded event
document.onreadystatechange = () => {
  if (document.readyState === 'interactive') {
    // do something
  }
}