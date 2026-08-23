-- HikingTrailClosures SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "HikingTrailClosures",
      slug = "hiking-trail-closures",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://data.geo.admin.ch",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["trail_closure"] = {},
      },
    },
    entity = {
      ["trail_closure"] = {
        ["fields"] = {
          {
            ["name"] = "geometry",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the closure",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "properties",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "type",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "trail_closure",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "json",
                      ["kind"] = "query",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "de",
                      ["kind"] = "query",
                      ["name"] = "lang",
                      ["orig"] = "lang",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/ch.astra.wanderland-sperrungen_umleitungen/",
                ["parts"] = {
                  "ch.astra.wanderland-sperrungen_umleitungen",
                },
                ["select"] = {
                  ["exist"] = {
                    "format",
                    "lang",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.features`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
