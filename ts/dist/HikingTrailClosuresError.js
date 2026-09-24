"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HikingTrailClosuresError = void 0;
class HikingTrailClosuresError extends Error {
    isHikingTrailClosuresError = true;
    sdk = 'HikingTrailClosures';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.HikingTrailClosuresError = HikingTrailClosuresError;
//# sourceMappingURL=HikingTrailClosuresError.js.map