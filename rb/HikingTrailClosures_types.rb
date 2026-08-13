# frozen_string_literal: true

# Typed models for the HikingTrailClosures SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# TrailClosure entity data model.
#
# @!attribute [rw] geometry
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] properties
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
TrailClosure = Struct.new(
  :geometry,
  :id,
  :properties,
  :type,
  keyword_init: true
)

# Request payload for TrailClosure#list.
#
# @!attribute [rw] geometry
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] properties
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
TrailClosureListMatch = Struct.new(
  :geometry,
  :id,
  :properties,
  :type,
  keyword_init: true
)

