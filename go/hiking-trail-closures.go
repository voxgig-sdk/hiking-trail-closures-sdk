package voxgighikingtrailclosuressdk

import (
	"github.com/voxgig-sdk/hiking-trail-closures-sdk/go/core"
	"github.com/voxgig-sdk/hiking-trail-closures-sdk/go/entity"
	"github.com/voxgig-sdk/hiking-trail-closures-sdk/go/feature"
	_ "github.com/voxgig-sdk/hiking-trail-closures-sdk/go/utility"
)

// Type aliases preserve external API.
type HikingTrailClosuresSDK = core.HikingTrailClosuresSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type HikingTrailClosuresEntity = core.HikingTrailClosuresEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type HikingTrailClosuresError = core.HikingTrailClosuresError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTrailClosureEntityFunc = func(client *core.HikingTrailClosuresSDK, entopts map[string]any) core.HikingTrailClosuresEntity {
		return entity.NewTrailClosureEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewHikingTrailClosuresSDK = core.NewHikingTrailClosuresSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewHikingTrailClosuresSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *HikingTrailClosuresSDK  { return NewHikingTrailClosuresSDK(nil) }
func Test() *HikingTrailClosuresSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
