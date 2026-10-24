# HikingTrailClosures SDK utility: prepare_body
require_relative 'media'
module HikingTrailClosuresUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return HikingTrailClosuresUtilities.raw_body(ctx.reqdata) if HikingTrailClosuresUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
