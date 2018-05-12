import assert from 'assert'
import { loadServerHTML } from "../load-server-html"
import sinon from 'sinon'

describe('loadServerHTML', () => {
  it('サーバのHTMLを読み込める', () => {
    document.body.innerHTML = __html__['src/js/test/load-server-html.html']

    let server = sinon.fakeServer.create()
    let container = document.querySelector('.js-container')
    assert.equal(container.innerHTML, '', '最初は何も存在しない')

    loadServerHTML(container, '/path/to/server_html')
    assert.equal(container.innerHTML, 'loading', 'リクエストを送ったら中身がloadingに')

    server.respondWith([
      200,
      { "Content-Type": "text/html" },
      '<p>サーバから返したHTMLです</p>'
    ])
    server.respond()

    assert.equal(container.innerHTML, '<p>サーバから返したHTMLです</p>', '返ってきたHTMLがロードされる')

    server.restore()
  })
})