# HikingTrailClosures SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module HikingTrailClosuresFeatures
  def self.make_feature(name)
    case name
    when "base"
      HikingTrailClosuresBaseFeature.new
    when "ratelimit"
      HikingTrailClosuresRatelimitFeature.new
    when "retry"
      HikingTrailClosuresRetryFeature.new
    when "test"
      HikingTrailClosuresTestFeature.new
    when "timeout"
      HikingTrailClosuresTimeoutFeature.new
    else
      HikingTrailClosuresBaseFeature.new
    end
  end
end
