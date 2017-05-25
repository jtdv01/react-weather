package main 

import (
	"fmt"
	"log"
	"flag"
	"github.com/skratchdot/open-golang/open"
	"net/http"
)

func openBrowser(port string){
	err := open.Run(fmt.Sprintf("http://localhost%s",port))
	if(err != nil){
		log.Panicln(err)
	}
}

func runServer(port string) {
	fs := http.FileServer(http.Dir("."))
	http.Handle("/", fs)
	http.ListenAndServe(port, nil)
}

func main() {
	var port string 
	flag.StringVar(&port, "port", ":3000", "Port with a prefix :. Defaults to ':3000'")
	flag.Parse()

	log.Println(fmt.Sprintf("Server started at port %s", port))
	go openBrowser(port)	
	runServer(port)
}
