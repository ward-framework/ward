<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo, twitter_handle, email
-->





<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


### The documentation is not available for now, the project is still in early stages.

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/github_username/repo">
    <img src="https://raw.githubusercontent.com/colinespinas/ward/master/public/assets/images/logo.png" alt="Logo" width="120">
  </a>

  <h3 align="center">WARD</h3>

  <p align="center">
    A fast & simple client side framework for building websites
    <br />
    <a href="https://github.com/github_username/repo"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://ColinEspinas.github.io/ward/public/">View Demo</a>
    ·
    <a href="https://github.com/colinespinas/ward/issues">Report Bug</a>
    ·
    <a href="https://github.com/colinespinas/ward/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
  * [Templating](#templating)
    * [Views](#views)
    * [Template Engine](#template-engine)
  * [Routing](#routing)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
<!-- * [Acknowledgements](#acknowledgements) -->



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://i.imgur.com/o9rDolc.jpg)

Ward is a simple client sided framework that helps you create fast websites. It is really easy to use and comes with routing and templating.



<!-- GETTING STARTED -->
## Getting Started

Get your Ward project up and ready.

### Prerequisites

Ward is a standalone framework, you don't need anything to make it work.

### Installation

This repository act as a base for Ward projects so you just need to clone it:
```sh
git clone https://github.com/ColinEspinas/ward.git
```
Then make the "public/index.html" file the root of your website.

Now go to the "/" route you must see the Ward welcome page.



<!-- USAGE EXAMPLES -->
## Usage

The content below is just explaining basic usages, consider cheking the [documentation]() about more specific use cases.

### Templating

#### Views

Ward uses view loading to display content on routes. Views uses the ".ward.html" extension.

View are defined by a head and a body like normal html pages:
```html
<viewhead>
  <title>View title</title>
</viewhead>

<viewbody>
  <p>View content</p>
</viewbody>
```

The name of the view will be the path of the view from the view folder without the extension:
```
"public/views/myhomepage.ward.html" => "myhomepage"
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



### Routing
The routing is done in "routes/web.js".

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
Route.link(path);
```
```html
<!-- Exemple: -->
<a href="{# Route.link("/home") #}">Home</a>
```



<!-- CONTRIBUTING -->
## Contributing

This project is developed by a somewhat beginner javascript developer, help is always welcome. Do not hesitate to contribute to the project.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/FeatureOrFix`)
3. Commit your Changes (`git commit -m 'Add some feature or fix'`)
4. Push to the Branch (`git push origin feature/FeatureOrFix`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Ward is distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Colin Espinas - [Website](https://colinespinas.com) - contact@colinespinas.com

Project link: [https://github.com/ColinEspinas/ward](https://github.com/ColinEspinas/ward)



<!-- ACKNOWLEDGEMENTS
## Acknowledgements

* []()
* []()
* []()
 -->




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/colinespinas/ward.svg?style=flat-square
[contributors-url]: https://github.com/colinespinas/ward/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/colinespinas/ward.svg?style=flat-square
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/colinespinas/ward.svg?style=flat-square
[stars-url]: https://github.com/colinespinas/ward/stargazers
[issues-shield]: https://img.shields.io/github/issues/colinespinas/ward.svg?style=flat-square
[issues-url]: https://github.com/colinespinas/ward/issues
[license-shield]: https://img.shields.io/github/license/colinespinas/ward.svg?style=flat-square
[license-url]: https://github.com/colinespinas/ward/blob/master/LICENSE.md
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/colin-espinas-9739b8178/l
[product-screenshot]: https://i.imgur.com/o9rDolc.jpg
