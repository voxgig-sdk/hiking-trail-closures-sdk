package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTrailClosureEntityFunc func(client *HikingTrailClosuresSDK, entopts map[string]any) HikingTrailClosuresEntity

