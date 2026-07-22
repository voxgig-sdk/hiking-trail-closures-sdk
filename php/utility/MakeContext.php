<?php
declare(strict_types=1);

// HikingTrailClosures SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class HikingTrailClosuresMakeContext
{
    public static function call(array $ctxmap, ?HikingTrailClosuresContext $basectx): HikingTrailClosuresContext
    {
        return new HikingTrailClosuresContext($ctxmap, $basectx);
    }
}
