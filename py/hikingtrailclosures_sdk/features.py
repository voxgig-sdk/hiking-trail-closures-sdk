# HikingTrailClosures SDK feature factory

from hikingtrailclosures_sdk.feature.base_feature import HikingTrailClosuresBaseFeature
from hikingtrailclosures_sdk.feature.test_feature import HikingTrailClosuresTestFeature


def _make_feature(name):
    features = {
        "base": lambda: HikingTrailClosuresBaseFeature(),
        "test": lambda: HikingTrailClosuresTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
