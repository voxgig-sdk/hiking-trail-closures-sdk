
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'HikingTrailClosures',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: 'https://data.geo.admin.ch',

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      trail_closure: {
      },

    }
  }


  entity = {
    "trail_closure": {
      "fields": [
        {
          "active": true,
          "name": "geometry",
          "req": false,
          "type": "`$OBJECT`",
          "index$": 0
        },
        {
          "active": true,
          "name": "id",
          "req": false,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "properties",
          "req": false,
          "type": "`$OBJECT`",
          "index$": 2
        },
        {
          "active": true,
          "name": "type",
          "req": false,
          "type": "`$STRING`",
          "index$": 3
        }
      ],
      "name": "trail_closure",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "example": "json",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "de",
                    "kind": "query",
                    "name": "lang",
                    "orig": "lang",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/ch.astra.wanderland-sperrungen_umleitungen/",
              "parts": [
                "ch.astra.wanderland-sperrungen_umleitungen"
              ],
              "select": {
                "exist": [
                  "format",
                  "lang"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.features`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

