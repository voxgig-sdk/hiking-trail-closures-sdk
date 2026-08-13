<?php
declare(strict_types=1);

// HikingTrailClosures SDK configuration

class HikingTrailClosuresConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "HikingTrailClosures",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://data.geo.admin.ch",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "trail_closure" => [],
                ],
            ],
            "entity" => [
        'trail_closure' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'geometry',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'properties',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'type',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
          ],
          'name' => 'trail_closure',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'de',
                        'kind' => 'query',
                        'name' => 'lang',
                        'orig' => 'lang',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/ch.astra.wanderland-sperrungen_umleitungen/',
                  'parts' => [
                    'ch.astra.wanderland-sperrungen_umleitungen',
                  ],
                  'select' => [
                    'exist' => [
                      'format',
                      'lang',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.features`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return HikingTrailClosuresFeatures::make_feature($name);
    }
}
