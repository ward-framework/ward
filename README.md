
### The full documentation is not available for now, the project is still in early stages.

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/ward-framework/ward">
    <img src="https://raw.githubusercontent.com/ward-framework/ward/master/public/assets/images/logo.png" alt="Logo" width="120">
  </a>

  <h3 align="center">WARD</h3>

  <p align="center">
    A fast & simple client side framework for building websites
    <br />
    <a href="#"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://ward-demo.herokuapp.com">View Demo</a>
    ·
    <a href="https://github.com/ward-framework/ward/issues">Report Bug</a>
    ·
    <a href="https://github.com/ward-framework/ward/issues">Request Feature</a>
    <br />
    <br />
    <a href="https://github.com/ward-framework/ward/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/ward-framework/ward.svg?style=flat-square" alt="Contributors">
    </a>
    <a href="https://github.com/ward-framework/ward/network/members">
      <img src="https://img.shields.io/github/forks/ward-framework/ward.svg?style=flat-square" alt="Forks">
    </a>
    <a href="https://github.com/ward-framework/ward/stargazers">
      <img src="https://img.shields.io/github/stars/ward-framework/ward.svg?style=flat-square" alt="Stargazer">
    </a>
    <a href="https://github.com/ward-framework/ward/issues">
      <img src="https://img.shields.io/github/issues/ward-framework/ward.svg?style=flat-square" alt="Issues">
    </a>
    <a href="https://github.com/ward-framework/ward/blob/master/LICENSE.md">
      <img src="https://img.shields.io/github/license/ward-framework/ward.svg?style=flat-square" alt="License">
    </a>
    <a href="https://www.linkedin.com/in/colin-espinas">
      <img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555" alt="Linkedin">
    </a>
    <br />
    <br />
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About](#about)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
  * [Templating](#templating)
    * [Views](#views)
    * [Template Engine](#template-engine)
    * [Components](#components)
  * [Routing](#routing)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
<!-- * [Acknowledgements](#acknowledgements) -->



<!-- ABOUT THE PROJECT -->
## About

[![Product Name Screen Shot][product-screenshot]](https://ward-demo.herokuapp.com/)

Ward is a simple client sided framework that helps you create fast websites. It is really easy to use and comes with routing and templating.



<!-- GETTING STARTED -->
## Getting Started

Get your Ward project up and ready.

### Prerequisites

Ward is a standalone framework, you don't need anything to make it work but you will need Node.js and a package manager to serve it easely with [ward-server](https://github.com/ward-framework/ward-server).

### Installation

#### CLI

It is recommended to use the [ward-cli](https://github.com/ward-framework/ward-cli) to create and serve your Ward projects
1. Install ward-cli globally:
```sh
npm install ward-cli -g
```

2. Create a new Ward project and serve it:
```sh
# Create a new project
ward new MyProject
# Move into the project directory
cd MyProject
# Serve the project
ward serve
```

#### Git Clone

1. This repository can act as a skeleton for Ward projects so you just need to clone it:
```sh
git clone https://github.com/ColinEspinas/ward.git
```
2. Install dependencies ([ward-server](https://github.com/ward-framework/ward-server)):
```sh
npm install
```
3. Now if you want to serve your Ward project use:
```sh
npm start
```

NOTE: Nothing stops you from serving Ward projects with Apache servers by tweeking your `.htaccess` file. If you do so, do not hesitate to share your methods to help the development of the project. 

<!-- USAGE EXAMPLES -->
## Usage

The content below is just explaining basic usages, consider cheking the [documentation]() about more specific use cases.

### Templating

#### Views

Ward uses view loading to display content on routes. Views uses the `.ward.html` extension.

Views are defined by a head and a body like normal html pages:
```html
<viewhead>
  <title>View title</title>
</viewhead>

<viewbody>
  <p>View content</p>
</viewbody>
```

The name of a view will be the path of the view from the `app/views` folder without the extension:
```
"app/views/myhomepage.ward.html" => "myhomepage"
"app/views/mypages/myhomepage.ward.html" => "mypages/myhomepage"
```

In javascript the View object is constructed with:
```javascript
View(name, params/*optional*/));
```


#### Template engine

The Ward templating engine works with `{# expression #}` and allows every javascript expression.

You can use it to pass parameters to a view:
```html
<p>{# name #}</p>
```
NOTE: You can pass any javascript global variable too.

And you can also use logic structures and functions:
```html
<viewbody>
  {# for(let item of items) { #}
    <p>{# item.name #}</p>
    {# console.log(item) #}
  {# } #}
</viewbody>
```


#### Components

Components are just like views, they use the extension `ward.html` but are self contained and can be included in views or in other components.

Like views, the name of a component will be the path of the component from the `app/views` folder without the extension:
```
"app/views/components/button.ward.html" => "compontents/button"
```

In javascript the Component object is constructed with:
```javascript
Component(tag, name/*optional*/, params/*optional*/));
```

To add a component to a view you need to use the `component` helper function:
```html
{# component("tag", "name", { options : true }) #}
```

That helper function shares the same arguments as the Component object constructor.


### Routing
Ward uses hash navigation by default, that means that your URI will look like `/#/this/is/a/route`.

The routing is done in `app/routes/routes.js`.

To register a new route you should use:
```javascript
router.register(new Route(path, callback));
```
```javascript
// Exemple:
router.register(new Route("/home", function() { 
  return new View("home"); 
}));
```
Routes that return Views will load that view, you can pass arguments to a view with:
```javascript
return new View(name, arguments); 
```

To navigate to a new route use:
```javascript
router.redirect(path);
```
```javascript
// Exemple:
router.redirect("/home");
```

To get the right path to a view use:
```javascript
Route.link(path); // In javascript
link(path) // Helper for templates
```
```html
<!-- Exemple: -->
<a href="{# link("/home") #}">Home</a>
```

To add a name to a route use:
```javascript
route.name("home");
```

To create an alias to a route use:
```javascript
route.alias("/path");
```

You can chain the `name` and `alias` method like this:
```javascript
router.register(new Route("/home", function() { 
  return new View("home");
}).name("home").alias("/myhomepage"));
```


<!-- CONTRIBUTING -->
## Contributing

This project is developed by a somewhat beginner javascript developer, help is always welcome. Do not hesitate to contribute to the project.

1. Fork the Project
2. Create your Feature or Fix Branch (`git checkout -b feature/Feature` or `git checkout -b fix/Fix`)
3. Commit your Changes (`git commit -m 'Add some feature or fix'`)
4. Push to the Branch (`git push origin feature/Feature` or `git push origin fix/Fix`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Ward is distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Colin Espinas - [Website](https://colinespinas.com) - contact@colinespinas.com

Project link: [https://github.com/ColinEspinas/ward](https://github.com/ward-framework/ward)



<!-- ACKNOWLEDGEMENTS
## Acknowledgements

* []()
* []()
* []()
 -->