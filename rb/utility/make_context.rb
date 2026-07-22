# HikingTrailClosures SDK utility: make_context
require_relative '../core/context'
module HikingTrailClosuresUtilities
  MakeContext = ->(ctxmap, basectx) {
    HikingTrailClosuresContext.new(ctxmap, basectx)
  }
end
