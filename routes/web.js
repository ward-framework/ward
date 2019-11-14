let router;

OnConfigLoaded(function() {

	// Define app router
	const options = config.mode === "DEV" ? {muted:false} : {muted:true};
	router = new Router([], options);

	// Register routes here
	router.register(new Route("", function() { return new View("home"); }));
	router.register(new Route("/test/hello", function() { return new View("home"); }));

});