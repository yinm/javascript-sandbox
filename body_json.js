// https://developer.mozilla.org/ja/docs/Web/API/Body/json
// execute at https://mdn.github.io/fetch-examples/fetch-json/

// comment out for already been declared
// const myList = document.querySelector('ul')

const myRequest = new Request('products.json')

fetch(myRequest)
  .then(res => res.json())
  .then(data => {
    for (let i = 0, length = data.products.length; i < length; i++) {
      let listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${data.products[i].Name}</strong> can be found in ${data.products[i].Location}. Cost: <strong>£${data.products[i].Price}</strong>`
      myList.appendChild(listItem)
    }
  })
