-- HikingTrailClosures SDK error

local HikingTrailClosuresError = {}
HikingTrailClosuresError.__index = HikingTrailClosuresError


function HikingTrailClosuresError.new(code, msg, ctx)
  local self = setmetatable({}, HikingTrailClosuresError)
  self.is_sdk_error = true
  self.sdk = "HikingTrailClosures"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function HikingTrailClosuresError:error()
  return self.msg
end


function HikingTrailClosuresError:__tostring()
  return self.msg
end


return HikingTrailClosuresError
