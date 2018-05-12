import assert from 'assert'
import { appendList } from "../append-list"

document.body.innerHTML = '<ul class="list"></ul>'

let ul = document.querySelector('.list')
assert.equal(ul.children.length, 0, '最初は0件')

appendList(ul, '要素1')
assert.equal(ul.children.length, 1, '件数が1件に！')
assert.equal(ul.children[0].textContent, '要素1')