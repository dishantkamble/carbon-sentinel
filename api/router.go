package router

import (
	v1 "github.com/dishantkamble/carbon-sentinel/api/v1"
	"github.com/gin-gonic/gin"
)

func InitRouter() *gin.Engine {
	router := gin.Default()
	router.Use(gin.Logger())
	router.Use(gin.Recovery())

	apiV1 := router.Group("/api/v1")
	{
		apiV1.GET("/ping", v1.Ping)
		jokes := apiV1.Group("/jokes")
		{
			jokes.GET("/random", v1.RandomJoke)
		}
	}

	return router
}
