<?php
declare(strict_types=1);

// HikingTrailClosures SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class HikingTrailClosuresFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new HikingTrailClosuresBaseFeature();
            case "test":
                return new HikingTrailClosuresTestFeature();
            default:
                return new HikingTrailClosuresBaseFeature();
        }
    }
}
