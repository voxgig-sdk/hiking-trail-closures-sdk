

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { HikingTrailClosuresSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('TrailClosureEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HIKING_TRAIL_CLOSURES_TEST_LIVE=TRUE.
  afterEach(liveDelay('HIKING_TRAIL_CLOSURES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HikingTrailClosuresSDK.test()
    const ent = testsdk.TrailClosure()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('trail_closure hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of HikingTrailClosuresSDK.test(offline).TrailClosure().stream('list')) { }
    }, /offline/)

    for await (const _item of HikingTrailClosuresSDK.test(offline).TrailClosure()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = HikingTrailClosuresSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.TrailClosure().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of HikingTrailClosuresSDK.test().TrailClosure().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new HikingTrailClosuresSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.TrailClosure().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.TrailClosure().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = HikingTrailClosuresSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.TrailClosure().list({"format":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HIKING_TRAIL_CLOSURES_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'trail_closure.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"geometry":{"a":true,"h":"Geometry","n":"geometry","r":false,"t":"`$OBJECT`","key$":"geometry","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the closure","t":"`$STRING`","key$":"id","index$":1},"properties":{"a":true,"h":"Properties","n":"properties","r":false,"t":"`$OBJECT`","key$":"properties","index$":2},"type":{"a":true,"h":"Type","n":"type","r":false,"t":"`$STRING`","key$":"type","index$":3}},"id":{"field":"id","name":"id"},"name":"trail_closure","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /ch.astra.wanderland-sperrungen_umleitungen/","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"json","k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"de","k":"query","n":"lang","or":"lang","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/ch.astra.wanderland-sperrungen_umleitungen/","q":{},"r":{},"rs":{"alternatives":[{"kind":"json","media":"application/geo+json"},{"kind":"raw","media":"application/xml"}],"kind":"json","media":"application/json"},"s":[{"lit":"ch.astra.wanderland-sperrungen_umleitungen"}],"t":{"req":"`reqdata`","res":"`body.features`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"trail_closure","name__orig":"trail_closure","Name":"TrailClosure","name_":"trail_closure","name-":"trail-closure","NAME":"TRAIL_CLOSURE","index$":0}, {"active":true,"entity":"trail_closure","key$":"BasicTrailClosureFlow","kind":"basic","name":"BasicTrailClosureFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"trail_closure_ref01"}}],"index$":0}]}, 'TrailClosure', {"GET /ch.astra.wanderland-sperrungen_umleitungen/":{"protocol":"http","parameters":[{"name":"format","in":"query","description":"Response format (json, geojson, xml)","required":false,"schema":{"type":"string","enum":["json","geojson","xml"],"default":"json"},"index$":0},{"name":"lang","in":"query","description":"Language for response (de, fr, it, en)","required":false,"schema":{"type":"string","enum":["de","fr","it","en"],"default":"de"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let trail_closure_ref01_data = Object.values(setup.data.existing.trail_closure)[0] as any

    // LIST
    const trail_closure_ref01_ent = client.TrailClosure()
    const trail_closure_ref01_match: any = {}

    const trail_closure_ref01_list = (await trail_closure_ref01_ent.list(trail_closure_ref01_match)).map((e: any) => e.data())


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/trail_closure/TrailClosureTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = HikingTrailClosuresSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['trail_closure01','trail_closure02','trail_closure03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HIKING_TRAIL_CLOSURES_TEST_TRAIL_CLOSURE_ENTID': idmap,
    'HIKING_TRAIL_CLOSURES_TEST_LIVE': 'FALSE',
    'HIKING_TRAIL_CLOSURES_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['HIKING_TRAIL_CLOSURES_TEST_TRAIL_CLOSURE_ENTID']

  const live = 'TRUE' === env.HIKING_TRAIL_CLOSURES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HIKING_TRAIL_CLOSURES_TEST_TRAIL_CLOSURE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new HikingTrailClosuresSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.HIKING_TRAIL_CLOSURES_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
