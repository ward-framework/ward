import App from "../../core/App.js";
import Route from "../../core/routing/Route.js";
import View from "../../core/templating/View.js";

const router = App.get.router;

// Register routes here
router.register(new Route("/", function() { return new View("home", {test: "hello"}); }));
