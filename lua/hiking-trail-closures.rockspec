package = "voxgig-sdk-hiking-trail-closures"
version = "0.0.1-1"
source = {
  -- git+https (GitHub dropped git:// in 2022); pin the install to the release
  -- tag pushed by `make publish`, and point at the lua/ subdir of the monorepo.
  url = "git+https://github.com/voxgig-sdk/hiking-trail-closures-sdk.git",
  tag = "lua/v0.0.1",
  dir = "hiking-trail-closures-sdk/lua"
}
description = {
  summary = "Unofficial generated Lua SDK for the Hiking Trail Closures public API. Not affiliated with or endorsed by the upstream API provider.",
  homepage = "https://github.com/voxgig-sdk/hiking-trail-closures-sdk",
  issues_url = "https://github.com/voxgig-sdk/hiking-trail-closures-sdk/issues",
  license = "MIT",
  labels = { "voxgig", "sdk", "generated-sdk", "openapi", "api-client", "hiking-trail-closures" }
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["hiking-trail-closures_sdk"] = "hiking-trail-closures_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
