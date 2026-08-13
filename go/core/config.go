package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "HikingTrailClosures",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://data.geo.admin.ch",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"trail_closure": map[string]any{},
			},
		},
		"entity": map[string]any{
			"trail_closure": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "geometry",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "properties",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "type",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
				},
				"name": "trail_closure",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "de",
											"kind": "query",
											"name": "lang",
											"orig": "lang",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/ch.astra.wanderland-sperrungen_umleitungen/",
								"parts": []any{
									"ch.astra.wanderland-sperrungen_umleitungen",
								},
								"select": map[string]any{
									"exist": []any{
										"format",
										"lang",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.features`",
								},
								"index$": 0,
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
