import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "trail_closure",
    "accessor": "TrailClosure",
    "op": "list",
    "method": "GET",
    "path": "/ch.astra.wanderland-sperrungen_umleitungen/",
    "args": [],
    "select": {
      "format": "json",
      "lang": "de"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json",
      "application/geo+json",
      "application/xml"
    ],
    "query": [
      "format",
      "lang"
    ],
    "queryArgs": [
      {
        "name": "format",
        "wire": "format"
      },
      {
        "name": "lang",
        "wire": "lang"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "id": "x",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                1
              ]
            ]
          },
          "properties": {
            "name": "x",
            "type": "hiking",
            "status": "closed",
            "reason": "x",
            "startDate": "2026-01-01",
            "endDate": "2026-01-01",
            "description": "x",
            "alternativeRoute": "x"
          }
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
