<?php
declare(strict_types=1);

// HikingTrailClosures SDK utility: feature_hook

class HikingTrailClosuresFeatureHook
{
    public static function call(HikingTrailClosuresContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
