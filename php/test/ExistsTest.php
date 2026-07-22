<?php
declare(strict_types=1);

// HikingTrailClosures SDK exists test

require_once __DIR__ . '/../hikingtrailclosures_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = HikingTrailClosuresSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
