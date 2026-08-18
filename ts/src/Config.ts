
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
    base: "https://data.geo.admin.ch",

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
          "name": "geometry",
          "type": "`$OBJECT`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "properties",
          "type": "`$OBJECT`"
        },
        {
          "name": "type",
          "type": "`$STRING`"
        }
      ],
      "name": "trail_closure",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "json",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "de",
                    "kind": "query",
                    "name": "lang",
                    "orig": "lang",
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
              }
            }
          ]
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

