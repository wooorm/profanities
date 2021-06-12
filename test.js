import test from 'tape'
import {profanities} from './index.js'

test('profanities', (t) => {
  t.equal(typeof profanities, 'object', 'should be an array #1')
  t.equal(Array.isArray(profanities), true, 'should be an array #2')
  t.notEqual(profanities.indexOf('barf'), -1, 'should contain words')
  t.end()
})
