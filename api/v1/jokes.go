package v1

import (
	"github.com/dishantkamble/carbon-sentinel/service"
	"github.com/gin-gonic/gin"
)

func RandomJoke(context *gin.Context) {
	joke := service.RandomJoke()

	context.JSON(200, joke)
}
