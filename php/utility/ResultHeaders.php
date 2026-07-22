<?php
declare(strict_types=1);

// HikingTrailClosures SDK utility: result_headers

class HikingTrailClosuresResultHeaders
{
    public static function call(HikingTrailClosuresContext $ctx): ?HikingTrailClosuresResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
