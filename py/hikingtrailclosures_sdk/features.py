# HikingTrailClosures SDK feature factory

from hikingtrailclosures_sdk.feature.base_feature import HikingTrailClosuresBaseFeature
from hikingtrailclosures_sdk.feature.ratelimit_feature import HikingTrailClosuresRatelimitFeature
from hikingtrailclosures_sdk.feature.retry_feature import HikingTrailClosuresRetryFeature
from hikingtrailclosures_sdk.feature.test_feature import HikingTrailClosuresTestFeature
from hikingtrailclosures_sdk.feature.timeout_feature import HikingTrailClosuresTimeoutFeature


_FEATURES = {
    "base": lambda: HikingTrailClosuresBaseFeature(),
    "ratelimit": lambda: HikingTrailClosuresRatelimitFeature(),
    "retry": lambda: HikingTrailClosuresRetryFeature(),
    "test": lambda: HikingTrailClosuresTestFeature(),
    "timeout": lambda: HikingTrailClosuresTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
