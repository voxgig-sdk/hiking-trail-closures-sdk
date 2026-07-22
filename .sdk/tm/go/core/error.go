package core

type HikingTrailClosuresError struct {
	IsHikingTrailClosuresError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewHikingTrailClosuresError(code string, msg string, ctx *Context) *HikingTrailClosuresError {
	return &HikingTrailClosuresError{
		IsHikingTrailClosuresError: true,
		Sdk:              "HikingTrailClosures",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *HikingTrailClosuresError) Error() string {
	return e.Msg
}
