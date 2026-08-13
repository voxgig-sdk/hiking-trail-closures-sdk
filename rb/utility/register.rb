# HikingTrailClosures SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

HikingTrailClosuresUtility.registrar = ->(u) {
  u.clean = HikingTrailClosuresUtilities::Clean
  u.done = HikingTrailClosuresUtilities::Done
  u.make_error = HikingTrailClosuresUtilities::MakeError
  u.feature_add = HikingTrailClosuresUtilities::FeatureAdd
  u.feature_hook = HikingTrailClosuresUtilities::FeatureHook
  u.feature_init = HikingTrailClosuresUtilities::FeatureInit
  u.fetcher = HikingTrailClosuresUtilities::Fetcher
  u.make_fetch_def = HikingTrailClosuresUtilities::MakeFetchDef
  u.make_context = HikingTrailClosuresUtilities::MakeContext
  u.make_options = HikingTrailClosuresUtilities::MakeOptions
  u.make_request = HikingTrailClosuresUtilities::MakeRequest
  u.make_response = HikingTrailClosuresUtilities::MakeResponse
  u.make_result = HikingTrailClosuresUtilities::MakeResult
  u.make_point = HikingTrailClosuresUtilities::MakePoint
  u.make_spec = HikingTrailClosuresUtilities::MakeSpec
  u.make_url = HikingTrailClosuresUtilities::MakeUrl
  u.param = HikingTrailClosuresUtilities::Param
  u.prepare_auth = HikingTrailClosuresUtilities::PrepareAuth
  u.prepare_body = HikingTrailClosuresUtilities::PrepareBody
  u.prepare_headers = HikingTrailClosuresUtilities::PrepareHeaders
  u.prepare_method = HikingTrailClosuresUtilities::PrepareMethod
  u.prepare_params = HikingTrailClosuresUtilities::PrepareParams
  u.prepare_path = HikingTrailClosuresUtilities::PreparePath
  u.prepare_query = HikingTrailClosuresUtilities::PrepareQuery
  u.graphql_body = HikingTrailClosuresUtilities::GraphqlBody
  u.graphql_errors = HikingTrailClosuresUtilities::GraphqlErrors
  u.result_basic = HikingTrailClosuresUtilities::ResultBasic
  u.result_body = HikingTrailClosuresUtilities::ResultBody
  u.result_headers = HikingTrailClosuresUtilities::ResultHeaders
  u.transform_request = HikingTrailClosuresUtilities::TransformRequest
  u.transform_response = HikingTrailClosuresUtilities::TransformResponse
}
