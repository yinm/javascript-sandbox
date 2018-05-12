import assert from 'assert'
import sinon from 'sinon'
import { timeoutMessage } from "../timeout-message"

describe('timeoutMessage', () => {
  it('一定時間表示される', () => {
    document.body.innerHTML = __html__['src/js/test/timeout-message.html']

    let clock = sinon.useFakeTimers()
    let container = document.querySelector('.js-timeout-message')

    timeoutMessage(container, 'メッセージ', 3000)
    assert.equal(container.textContent, 'メッセージ', '指定した文章が表示')

    clock.tick(2999)
    assert.equal(container.textContent, 'メッセージ', '2999ms後も表示中')

    clock.tick(1)
    assert.equal(container.textContent, '', '3000ms後は消える')

    clock.restore()
  })
})