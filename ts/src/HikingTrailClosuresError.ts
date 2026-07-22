
import { Context } from './Context'


class HikingTrailClosuresError extends Error {

  isHikingTrailClosuresError = true

  sdk = 'HikingTrailClosures'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  HikingTrailClosuresError
}

