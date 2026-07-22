<?php
declare(strict_types=1);

// HikingTrailClosures SDK utility: result_body

class HikingTrailClosuresResultBody
{
    public static function call(HikingTrailClosuresContext $ctx): ?HikingTrailClosuresResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
