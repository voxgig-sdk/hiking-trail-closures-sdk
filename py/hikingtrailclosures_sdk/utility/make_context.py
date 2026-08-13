# HikingTrailClosures SDK utility: make_context

from hikingtrailclosures_sdk.core.context import HikingTrailClosuresContext


def make_context_util(ctxmap, basectx):
    return HikingTrailClosuresContext(ctxmap, basectx)
