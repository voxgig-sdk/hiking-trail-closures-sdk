# ProjectName SDK exists test

import pytest
from hikingtrailclosures_sdk import HikingTrailClosuresSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = HikingTrailClosuresSDK.test(None, None)
        assert testsdk is not None
