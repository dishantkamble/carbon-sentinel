package service

import (
	"fmt"
	"log"

	"github.com/dishantkamble/carbon-sentinel/model"
	"github.com/go-resty/resty/v2"
)

func RandomJoke() *model.Joke {
	client := resty.New().SetBaseURL("https://official-joke-api.appspot.com").EnableTrace()

	var joke model.Joke
	response, err := client.R().SetResult(&joke).Get("/random_joke")

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("GET Random Joke Status: ", response.Status())

	return &joke
}
