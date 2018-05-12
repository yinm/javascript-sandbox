import assert from 'assert'
import { appendList } from "../append-list"

describe('appendList', () => {
  it('コンテナにリストを追加できる', () => {
    document.body.innerHTML = __html__['src/js/test/append-list.html']

    let ul = document.querySelector('.list')
    assert.equal(ul.children.length, 0, '最初は0件')

    appendList(ul, '要素1')
    assert.equal(ul.children.length, 1, '件数が1件に!')
    assert.equal(ul.children[0].textContent, '要素1')
    assert.equal(ul.children[0].outerHTML, '<li>要素1</li>')

    appendList(ul, 'リスト2')
    assert.equal(ul.children.length, 2, '件数が2件に!!')
    assert.equal(ul.children[0].textContent, '要素1')
    assert.equal(ul.children[1].textContent, 'リスト2')
  })
})
