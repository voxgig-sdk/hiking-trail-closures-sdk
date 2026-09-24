

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { HikingTrailClosuresSDK, BaseFeature, stdutil } from '../../..'

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


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HIKING_TRAIL_CLOSURES_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'trail_closure.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"geometry":{"a":true,"h":"Geometry","n":"geometry","r":false,"t":"`$OBJECT`","key$":"geometry","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the closure","t":"`$STRING`","key$":"id","index$":1},"properties":{"a":true,"h":"Properties","n":"properties","r":false,"t":"`$OBJECT`","key$":"properties","index$":2},"type":{"a":true,"h":"Type","n":"type","r":false,"t":"`$STRING`","key$":"type","index$":3}},"id":{"field":"id","name":"id"},"name":"trail_closure","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /ch.astra.wanderland-sperrungen_umleitungen/","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"json","k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"de","k":"query","n":"lang","or":"lang","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/ch.astra.wanderland-sperrungen_umleitungen/","q":{"exist":["format","lang"]},"r":{},"s":[{"lit":"ch.astra.wanderland-sperrungen_umleitungen"}],"t":{"req":"`reqdata`","res":"`body.features`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"trail_closure","name__orig":"trail_closure","Name":"TrailClosure","name_":"trail_closure","name-":"trail-closure","NAME":"TRAIL_CLOSURE","index$":0}, {"active":true,"entity":"trail_closure","key$":"BasicTrailClosureFlow","kind":"basic","name":"BasicTrailClosureFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"trail_closure_ref01"}}],"index$":0}]}, 'TrailClosure', {"GET /ch.astra.wanderland-sperrungen_umleitungen/":{"protocol":"http","operationId":"getTrailClosures","responses":{"200":{"description":"Successful response with trail closure information","content":{"application/json":{"schema":{"type":"object","properties":{"type":{"example":"FeatureCollection","key$":"type","type":"string"},"features":{"items":{"properties":{"geometry":{"properties":{"coordinates":{"items":{"items":{"type":"number"},"type":"array"},"type":"array"},"type":{"example":"LineString","type":"string"}},"type":"object","key$":"geometry"},"id":{"description":"Unique identifier for the closure","type":"string","key$":"id"},"properties":{"properties":{"alternativeRoute":{"description":"Information about alternative routes","type":"string"},"description":{"description":"Detailed description of the closure or diversion","type":"string"},"endDate":{"description":"Expected end date of the closure","format":"date","type":"string"},"name":{"description":"Name of the affected trail or route","type":"string"},"reason":{"description":"Reason for closure or diversion","type":"string"},"startDate":{"description":"Start date of the closure","format":"date","type":"string"},"status":{"description":"Closure status","enum":["closed","diverted"],"type":"string"},"type":{"description":"Type of route (hiking trail, cycle route, mountain bike route)","enum":["hiking","cycling","mountainbike"],"type":"string"}},"type":"object","key$":"properties"},"type":{"example":"Feature","type":"string","key$":"type"}},"type":"object","index$":0},"key$":"features","type":"array"}}}},"application/geo+json":{"schema":{"type":"object","properties":{"type":{"type":"string","example":"FeatureCollection"},"features":{"type":"array","items":{"type":"object"}}}}},"application/xml":{"schema":{"type":"object"}}}},"400":{"description":"Bad request - invalid parameters"},"500":{"description":"Internal server error"},"503":{"description":"Service unavailable"}},"parameters":[{"name":"format","in":"query","description":"Response format (json, geojson, xml)","required":false,"schema":{"type":"string","enum":["json","geojson","xml"],"default":"json"},"index$":0},{"name":"lang","in":"query","description":"Language for response (de, fr, it, en)","required":false,"schema":{"type":"string","enum":["de","fr","it","en"],"default":"de"},"index$":1}],"securitySource":"unspecified"}})
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
  
