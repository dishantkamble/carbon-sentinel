package main

import (
	"log"
	"net/http"

	router "github.com/dishantkamble/carbon-sentinel/router"
)

func main() {
	routerInit := router.InitRouter()

	server := &http.Server{
		Handler: routerInit,
		Addr:    "0.0.0.0:8080",
	}

	log.Printf("[info] Starting HTTP server")
	server.ListenAndServe()
}
