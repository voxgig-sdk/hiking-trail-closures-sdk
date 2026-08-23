# HikingTrailClosures SDK configuration

module HikingTrailClosuresConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "HikingTrailClosures",
        "slug" => "hiking-trail-closures",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://data.geo.admin.ch",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "trail_closure" => {},
        },
      },
      "entity" => {
        "trail_closure" => {
          "fields" => [
            {
              "name" => "geometry",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the closure",
              "type" => "`$STRING`",
            },
            {
              "name" => "properties",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "type",
              "type" => "`$STRING`",
            },
          ],
          "name" => "trail_closure",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "de",
                        "kind" => "query",
                        "name" => "lang",
                        "orig" => "lang",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/ch.astra.wanderland-sperrungen_umleitungen/",
                  "parts" => [
                    "ch.astra.wanderland-sperrungen_umleitungen",
                  ],
                  "select" => {
                    "exist" => [
                      "format",
                      "lang",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.features`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    HikingTrailClosuresFeatures.make_feature(name)
  end
end
