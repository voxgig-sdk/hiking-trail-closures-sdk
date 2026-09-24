
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { HikingTrailClosuresSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = HikingTrailClosuresSDK.test()
    equal(testsdk instanceof HikingTrailClosuresSDK, true,
      'HikingTrailClosuresSDK.test() must return a client synchronously')
  })

})
