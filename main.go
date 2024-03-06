package main

import (
	"fmt"
	"log"
	"net/http"
)

// main is the entry point of the application.
func main() {
	// Print a greeting to the console.
	fmt.Println("Hello World")

	// Create a new instance of aServeMux.
	r := http.NewServeMux()

	// Define a handler function for the root URL.
	r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// Write a response to the client.
		w.Write([]byte("Hello World"))
	})

	// Start a server and listen on port 8008.
	log.Println("Server starting...")
	log.Fatal(http.ListenAndServe(":8008", r))
	log.Println("Server stopped")
}
