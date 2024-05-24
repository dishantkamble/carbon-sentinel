package main

import (
	"log"
	"net/http"

	router "github.com/dishantkamble/carbon-sentinel/api"
)

func main() {
	routerInit := router.InitRouter()

	server := &http.Server{
		Handler: routerInit,
		Addr:    "0.0.0.0:3000",
	}

	log.Printf("[info] Starting HTTP server")
	server.ListenAndServe()
}
