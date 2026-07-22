# HikingTrailClosures SDK exists test

require "minitest/autorun"
require_relative "../HikingTrailClosures_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = HikingTrailClosuresSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
