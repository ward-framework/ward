OnLoad(function() {

	// Register routes here :
	router.register(new Route("", function() { return new View("index"); }));
	router.register(new Route("#about", function() { return new View("about"); }));
	
});