# HikingTrailClosures SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "HikingTrailClosures",
            "slug": "hiking-trail-closures",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://data.geo.admin.ch",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "trail_closure": {},
            },
        },
        "entity": {
      "trail_closure": {
        "fields": [
          {
            "name": "geometry",
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the closure",
            "type": "`$STRING`",
          },
          {
            "name": "properties",
            "type": "`$OBJECT`",
          },
          {
            "name": "type",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
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
                      "type": "`$STRING`",
                    },
                    {
                      "example": "de",
                      "kind": "query",
                      "name": "lang",
                      "orig": "lang",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/ch.astra.wanderland-sperrungen_umleitungen/",
                "segments": [
                  {
                    "lit": "ch.astra.wanderland-sperrungen_umleitungen",
                  },
                ],
                "select": {
                  "exist": [
                    "format",
                    "lang",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.features`",
                },
                "parts": [
                  "ch.astra.wanderland-sperrungen_umleitungen",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
