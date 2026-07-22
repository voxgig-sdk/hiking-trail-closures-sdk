-- HikingTrailClosures SDK exists test

local sdk = require("hiking-trail-closures_sdk")

describe("HikingTrailClosuresSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
