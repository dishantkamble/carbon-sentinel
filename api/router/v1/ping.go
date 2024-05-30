package v1

import (
	"github.com/dishantkamble/carbon-sentinel/model"
	"github.com/gin-gonic/gin"
)

func Ping(context *gin.Context) {
	message := &model.Message{
		ID:    1,
		Value: "Hello World",
	}

	context.JSON(200, message)
}
