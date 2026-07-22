# HikingTrailClosures SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module HikingTrailClosuresFeatures
  def self.make_feature(name)
    case name
    when "base"
      HikingTrailClosuresBaseFeature.new
    when "test"
      HikingTrailClosuresTestFeature.new
    else
      HikingTrailClosuresBaseFeature.new
    end
  end
end
