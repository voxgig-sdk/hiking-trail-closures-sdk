<?php
declare(strict_types=1);

// Typed models for the HikingTrailClosures SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** TrailClosure entity data model. */
class TrailClosure
{
    public ?array $geometry = null;
    public ?string $id = null;
    public ?array $properties = null;
    public ?string $type = null;
}

/** Request payload for TrailClosure#list. */
class TrailClosureListMatch
{
    public ?array $geometry = null;
    public ?string $id = null;
    public ?array $properties = null;
    public ?string $type = null;
}

