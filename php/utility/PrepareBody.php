<?php
declare(strict_types=1);

// HikingTrailClosures SDK utility: prepare_body

class HikingTrailClosuresPrepareBody
{
    public static function call(HikingTrailClosuresContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
