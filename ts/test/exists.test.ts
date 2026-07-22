
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { HikingTrailClosuresSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await HikingTrailClosuresSDK.test()
    equal(null !== testsdk, true)
  })

})
