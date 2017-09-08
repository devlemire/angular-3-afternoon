<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, you will finish an Angular travel application. You will setup the routes and sub routes for the application as well as practice the fundamentals of Angular some more. 

Live example: <a href="#">Click Me!</a>

## Setup

* Fork and clone this repository
* `cd` into the project directory.
* Run `live-server ./`.
  * If you do not have `live-server`: Run `sudo npm i -g live-server`.
* Go to provided URL by `live-server` in your browser if it doesn't automatically open a browser window.

<img src="https://github.com/devlemire/angular-3-afternoon/blob/solution/readme-assets/1.png" />

## Step 1

### Summary

In this step, you'll familarize yourself with the existing code base.

### Instructions

* Take as much time as you need to familiarize yourself with the project.

## Step 2

### Summary

In this step, we'll configure the router to handle all the other provided views.

### Instructions

* Open `app/app.js`.
* Add the following new routes to the `config`:
  * Name: `packages` - Url: `/packages/:country` - Template: `app/packages/packagesTmpl.html`.
  * Name: `locations` - Url: `/locations` - Template: `app/locations/locationsTmpl.html`.
  * Name: `booked` - Url: `/booked/:id` - Template: `app/booked/bookedTmpl.html`.
  * Name: `adventurers` - Url: `/adventurers` - Template: `app/about/adventurers/adventurersTmpl.html`.
    * This route should be a sub-route of the home page.
  * Name: `contact` - Url: `/contact` - Template: `app/contact/contactTmpl.html`.
    * This route should be a sub-route of the home page.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `app/app.js`. In order for a user to navigate our Angular application, we'll need to add the remaining views into our router configuration. We can add more routes to our configuration by chaining on more `.state`s. All our additions will look similiar except for `adventurers` and `contact`. These routes will also include a `parent` property. This is what makes a route a sub-route. We'll assign the parent as `home` to make them sub-routes of `home`.

So if we wanted to add a route for `packages` we would just chain on another `.state` and use the information provided in the instructions above:

```js
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: 'app/about/aboutTmpl.html'
    })
    .state('packages', {
      url: '/packages/:country',
      templateUrl: 'app/packages/packagesTmpl.html'
    })
```

This would look the same for `locations` and `booked`:

```js
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: 'app/about/aboutTmpl.html'
    })
    .state('packages', {
      url: '/packages/:country',
      templateUrl: 'app/packages/packagesTmpl.html'
    })
    .state('locations', {
      url: '/locations',
      templateUrl: 'app/locations/locationsTmpl.html'
    })
    .state('booked', {
      url: '/booked/:id',
      templateUrl: 'app/booked/bookedTmpl.html'
    })
```

And then finally we can add the route for `adventurers` and `contact` which will have a `parent` of `home`:

```js
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: 'app/about/aboutTmpl.html'
    })
    .state('packages', {
      url: '/packages/:country',
      templateUrl: 'app/packages/packagesTmpl.html'
    })
    .state('locations', {
      url: '/locations',
      templateUrl: 'app/locations/locationsTmpl.html'
    })
    .state('booked', {
      url: '/booked/:id',
      templateUrl: 'app/booked/bookedTmpl.html'
    })
    .state('adventurers', {
      url: '/adventurers',
      templateUrl: 'app/about/adventurers/adventurersTmpl.html',
      parent: 'home'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'app/about/contact/contactTmpl.html',
      parent: 'home'
    });
```

</details>

### Solution

<details>

<summary> <code> app/app.js </code> </summary>

```js
angular.module('devmtnTravel', ['ui.router']).config( function ( $stateProvider, $urlRouterProvider ) {
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: 'app/about/aboutTmpl.html'
    })
    .state('packages', {
      url: '/packages/:country',
      templateUrl: 'app/packages/packagesTmpl.html'
    })
    .state('locations', {
      url: '/locations',
      templateUrl: 'app/locations/locationsTmpl.html'
    })
    .state('booked', {
      url: '/booked/:id',
      templateUrl: 'app/booked/bookedTmpl.html'
    })
    .state('adventurers', {
      url: '/adventurers',
      templateUrl: 'app/about/adventurers/adventurersTmpl.html',
      parent: 'home'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'app/about/contact/contactTmpl.html',
      parent: 'home'
    });

  $urlRouterProvider
    .otherwise('/');
});
```

</details>

## Step 3

### Summary

In this step, we'll create Angular controllers for `locations`, `packages`, and `booked`. We'll then assign the new controllers to our router configuration.

### Instructions

* Create a new controller file in:
  * `app/locations/`.
  * `app/packages/`.
  * `app/booked/`.
* Open `index.html`.
* Add `script` tags for each new controller in `index.html`.
* Open `app/app.js`.
* Assign the `locationCtrl` to the `locations` route.
* Assign the `packagesCtrl` to the `packages` route.
* Assign the `bookedCtrl` to the `booked` route.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by creating an empty controller file in `app/locations/`, `app/packages/`, and `app/booked/`. The file names I chose to use were `locationsCtrl.js`, `packagesCtrl.js`, and `bookedCtrl.js`. Inside each of these files we can create an empty controller file for the `devmtnTravel` Angular application.

```js
angular.module('devmtnTravel').controller('controllerName', function( $scope ) {

});
```

Be sure to replace `controllerName` with the name of the controller. I used these names: `locationsCtrl`, `packagesCtrl`, and `bookedCtrl`. Now that our controllers are created, we'll need to import them into `index.html`. Let's add three `script` tags underneath `<!--Our Custom Script Files-->`.

```html
<script src="app/locations/locationsCtrl.js"></script>
<script src="app/packages/packagesCtrl.js"></script>
<script src="app/booked/bookedCtrl.js"></script>
```

We can then assign these controllers to routes in our router configuration. We'll assign `locationCtrl` to the locations route, `packagesCtrl` to the packages route, and `bookedCtrl` to the booked route.

```js
.state('packages', {
  url: '/packages/:country',
  templateUrl: 'app/packages/packagesTmpl.html',
  controller: 'packagesCtrl'
})
.state('locations', {
  url: '/locations',
  templateUrl: 'app/locations/locationsTmpl.html',
  controller: 'locationsCtrl'
})
.state('booked', {
  url: '/booked/:id',
  templateUrl: 'app/booked/bookedTmpl.html',
  controller: 'bookedCtrl'
})
```

</details>

### Solution

<details>

<summary> <code> app/locations/locationCtrl.js </code> </summary>

```js
angular.module('devmtnTravel').controller('locationsCtrl', function( $scope ) {

});
```

</details>

<details>

<summary> <code> app/packages/packagesCtrl.js </code> </summary>

```js
angular.module('devmtnTravel').controller('packagesCtrl', function( $scope ) {

});
```

</details>

<details>

<summary> <code> app/booked/bookedCtrl.js </code> </summary>

```js
angular.module('devmtnTravel').controller('bookedCtrl', function( $scope ) {

});
```

</details>

<details>

<summary> <code> index.html </code> </summary>

```html
<!DOCTYPE html>
<html lang="en" ng-app="devmtnTravel">
  <head>
    <title>DevMtn Travels</title>

    <!-- META INFO -->
    <meta charset="UTF-8">
    <meta name="description" content="DevMtn Travels app using ui-routes ">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--RESET FILE -->
    <link rel="stylesheet" href="reset.css">

    <!--MAIN FILE-->
    <link rel="stylesheet" href="styles.css">

    <!-- View Styles -->
    <link rel="stylesheet" href="app/about/about.css">
    <link rel="stylesheet" href="app/about/adventurers/adventurers.css">
    <link rel="stylesheet" href="app/about/contact/contact.css">
    <link rel="stylesheet" href="app/locations/locations.css">
    <link rel="stylesheet" href="app/packages/packages.css">
    <link rel="stylesheet" href="app/booked/booked.css">
  </head>

  <body>
    <main role="main">
      <section class="home-page-top-container">
        <header>
          <nav>
            <ul>
              <!--Navigation Section-->
              <li><a>Locations</a></li>
              <li><a>Packages</a></li>
              <li><a><img src="./img/DevCircleWhite.svg" alt="DevMountain Logo"></a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>
            </ul>
          </nav>
        </header>
        <h1 class="intro-text">Discover</h1>
      </section>

      <!-- Here we are placing the ui-view tag this is where our views will be injected when we change routes. -->

      <ui-view></ui-view>

    </main>

    <!-- Including angular and ui-router then our javascript files. ORDER MATTERS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.js"></script>

    <!--Our Custom Script Files-->
    <script src="app/app.js"></script>
    <script src="app/locations/locationsCtrl.js"></script>
    <script src="app/packages/packagesCtrl.js"></script>
    <script src="app/booked/bookedCtrl.js"></script>
  </body>
</html>
```

</details>

<details>

<summary> <code> app/app.js </code> </summary>

```js
angular.module('devmtnTravel', ['ui.router']).config( function ( $stateProvider, $urlRouterProvider ) {
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: 'app/about/aboutTmpl.html'
    })
    .state('packages', {
      url: '/packages/:country',
      templateUrl: 'app/packages/packagesTmpl.html',
      controller: 'packagesCtrl'
    })
    .state('locations', {
      url: '/locations',
      templateUrl: 'app/locations/locationsTmpl.html',
      controller: 'locationsCtrl'
    })
    .state('booked', {
      url: '/booked/:id',
      templateUrl: 'app/booked/bookedTmpl.html',
      controller: 'bookedCtrl'
    })
    .state('adventurers', {
      url: '/adventurers',
      templateUrl: 'app/about/adventurers/adventurersTmpl.html',
      parent: 'home'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'app/about/contact/contactTmpl.html',
      parent: 'home'
    });

  $urlRouterProvider
    .otherwise('/');
});
```

</details>

## Step 4

### Summary

In this step, we'll test the controllers we just made to make sure everything is hooked up correctly.

### Instructions

* Inside each controller we made in the previous step, add a new `$scope` variable called `test` and set it equal to some string.
* Open all three template files ( `locationsTmpl.html`, `packagesTmpl.html`, `bookedTmpl.html` ):
  * Add `{{ test }}` somewhere in the HTML.
* In your browser, using the address bar, manually go to each route and make sure `$scope.test` is appearing on the DOM.
* Once you can successfully see the value of `$scope.test` on each view:
  * Remove `{{ test }}` from each template HTML file.
  * Remove `$scope.test` from each controller file.

### Solution

<img src="https://github.com/devlemire/angular-3-afternoon/blob/solution/readme-assets/1g.gif" />

## Step 5

### Summary

In this step, we'll hook up the `ui-sref`'s in the template HTML files to allow the user to navigate the application.

### Instructions

* Open each template HTML file and locate the comment explaining the `ui-sref`.
  * Don't worry about the `id` and `country` for the `booked` and `packages` route in this step.
* Open `index.html`.
* Locate the  `<!--Navigation Section-->` comment.
  * Add `ui-sref` tags to the correct view.
    * Locations should route to `locations`.
    * Packages should route to `packages`.
    * The logo shouldn't have a route.
    * About should route to `home`.
    * Contact should route to `contact`.

### Solution

<details>

<summary> <code> app/about/adventurers/adventurersTmpl.html </code> </summary>

```html
<section class="adventurers-main">
  <h1>WE ARE THE <em style="color:#12F0F0">ADVENTURERS</em></h1>

  <section class="adventurers-inner">
    <section class="adventure-card">
      <img src="../img/Grizzly-Adams.jpg" alt="Grizzly Adams">
      <h2>Grizzly Adams</h2>
      <p>Shabby chic 90's drinking vinegar irony kombucha meh. Fashion axe 8-bit everyday carry, locavore shabby chic small batch tote bag salvia ugh semiotics keffiyeh intelligentsia.</p>
    </section>

    <section class="adventure-card">
      <img src="../img/Rally-Sisters.jpg" alt="Rally Sisters">
      <h2>Rally Sisters</h2>
      <p>Shabby chic 90's drinking vinegar irony kombucha meh. Fashion axe 8-bit everyday carry, locavore shabby chic small batch tote bag salvia ugh semiotics keffiyeh intelligentsia.</p>
    </section>
  </section>

  <!--This button needs a ui-sref that points to packages-->
  <button ui-sref="packages">View Packages</button>
</section>

```

</details>

<details>

<summary> <code> app/about/aboutTmpl.html </code> </summary>

```html
<section class="about-main">
  <div class="about-image">
      <img src="../img/About-img.jpg" alt="About Page Image">
  </div>

  <ui-view class="about-inner-right">
    <section class="about-inner-intro">
      <h1>WE ARE A GROUP OF <em style="color:#12F0F0">ADVENTURERS</em></h1>
      <p>Maecenas rhoncus elit et mattis placerat. In aliquam eu velit gravida vulputate. Cras facilisis augue quis velit ultrices luctus. Duis eu turpis massa. Morbi iaculis porttitor feugiat. Suspendisse sit amet metus vulputate, fermentum sapien et, mollis massa. Quisque condimentum nunc vel nisl pellentesque, nec dapibus urna pulvinar. Nulla ac nisl arcu. Integer tincidunt mauris sed libero malesuada consequat. Vestibulum sodales lacus ornare, lobortis metus quis, laoreet eros. Duis tristique ligula sit amet malesuada accumsan. Nunc et metus maximus, faucibus magna quis, accumsan arcu. Nullam eleifend pretium vestibulum. Suspendisse nec diam lacus. Aliquam consequat tincidunt risus, et rutrum risus vehicula at.</p>

      <!--This button needs a ui-sref that points to adventurers-->
      <button ui-sref="adventurers"> MEET THE ADVENTURERS </button>
    </section>
  </ui-view>
</section>
```

</details>

<details>

<summary> <code> app/booked/bookedTmpl.html </code> </summary>

```html
<section class="booked-main-container" >
  <h1>Thanks for trusting us with your trip to <br>   <!-- Data bind the city name here --> </h1>

  <!--This button needs a ui-sref that points to packages -->
  <button ui-sref="packages"> VIEW MORE PACKAGES </button>
</section>
```

</details>

<details>

<summary> <code> app/locations/locationsTmpl.html </code> </summary>

```html
<section class="locations-container">
  <!-- This is where we need to repeat over our data that we are getting from our service via the controller . The controller should be getting the "travelInfo" data from the service. If you haven't made the controller, do that now and include it on your state object in app.js-->
  <section class="location-card" >
    <div class="image-container">
      <!-- In the controller get the data from "travelInfo" and assign it to $scope -->
      <!-- Once we have the data we can use {{}} to bind that data to our view -->
      <!--Add the image link from the data here. Remember to put something in the alt tag, perhaps the name of the Country-->
      <img ng-src="" alt="">
    </div>

    <div class="location-inner-left">
      <!-- Now we can start to extract the data and bind it to our different elements here-->
      <h1><!--The country name goes here--></h1>
      <p><!--The description goes here--></p>
    </div>

    <div class="location-inner-right">
      <h3>Package Start At $<!--The package price goes here--></h3>
      
      <!--This button needs a ui-sref that points to packages-->
      <button ui-sref="packages">See country packages</button>
    </div>
  </section>
</section>
```

</details>

<details>

<summary> <code> app/packages/packagesTmpl.html </code> </summary>

```html
<section class="packages-main">
  <!-- This is where we need to repeat over our "packageInfo" data that we are getting from our controller. The controller is getting the data from the service. If you haven't made the controller do that now and include it on your state object in app.js-->
  <section class="package-card">
    <!-- Once we have the data we can use {{}} to bind that data to our view -->
    <!--Add the image link from the data here using ng-src. Remember to put something in the alt tag, perhaps the name of the city-->
    <img alt="">
    <!-- Now we can start to extract the data and bind it to our different elements here-->
    <h6> <!--The city name goes here--> </h6>
    <h1><!--The country name goes here--></h1>
    <p><!--The description goes here--></p>
    <h3>$<!--The package price goes here--></h3>

    <!--This button needs a ui-sref that points to booked-->
    <button ui-sref="booked">Book Now</button>
  </section>
</section>
```

</details>

<details>

<summary> <code> index.html </code> </summary>

```html
<!DOCTYPE html>
<html lang="en" ng-app="devmtnTravel">
  <head>
    <title>DevMtn Travels</title>

    <!-- META INFO -->
    <meta charset="UTF-8">
    <meta name="description" content="DevMtn Travels app using ui-routes ">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--RESET FILE -->
    <link rel="stylesheet" href="reset.css">

    <!--MAIN FILE-->
    <link rel="stylesheet" href="styles.css">

    <!-- View Styles -->
    <link rel="stylesheet" href="app/about/about.css">
    <link rel="stylesheet" href="app/about/adventurers/adventurers.css">
    <link rel="stylesheet" href="app/about/contact/contact.css">
    <link rel="stylesheet" href="app/locations/locations.css">
    <link rel="stylesheet" href="app/packages/packages.css">
    <link rel="stylesheet" href="app/booked/booked.css">
  </head>

  <body>
    <main role="main">
      <section class="home-page-top-container">
        <header>
          <nav>
            <ul>
              <!--Navigation Section-->
              <li><a ui-sref="locations">Locations</a></li>
              <li><a ui-sref="packages">Packages</a></li>
              <li><a><img src="./img/DevCircleWhite.svg" alt="DevMountain Logo"></a></li>
              <li><a ui-sref="home">About</a></li>
              <li><a ui-sref="contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        <h1 class="intro-text">Discover</h1>
      </section>

      <!-- Here we are placing the ui-view tag this is where our views will be injected when we change routes. -->
      <ui-view></ui-view>

    </main>

    <!-- Including angular and ui-router then our javascript files. ORDER MATTERS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.js"></script>

    <!--Our Custom Script Files-->
    <script src="app/app.js"></script>
    <script src="app/locations/locationsCtrl.js"></script>
    <script src="app/packages/packagesCtrl.js"></script>
    <script src="app/booked/bookedCtrl.js"></script>
  </body>
</html>
```

</details>

<br />

<img src="https://github.com/devlemire/angular-3-afternoon/blob/solution/readme-assets/2g.gif" />

## Step 6

### Summary

In this step, we'll complete the `booked` feature. The booked feature is designed to work by getting an `id` from the URL. It will then find the corresponding `package` object from the `mainSrvc` `packageInfo` array and assign that object on `$scope`.

### Instructions

* Open `index.html`.
* Add a `script` tag for `app/mainSrvc.js`.
* Open `app/booked/bookedTmpl.html`, `app/booked/bookedCtrl.js`, and `app/mainSrvc.js`.
  * We won't need to make any coding changes to `mainSrvc.js`, but you can use this file to see what data we'll be looping through.
* Inside of `bookedCtrl.js`: 
  * Inject `$stateParams` into the controller.
  * Inject `mainSrvc` into the controller.
  * Assign a new `$scope` variable called packages that equals the `packageInfo` array on `mainSrvc`.
  * Find the `packageInfo` object that matches the `id` on `$stateParams`.
    * Assign a new `$scope` variable called `package` that equals this object.
* Inside of `bookedTmpl.html`:
  * Display the package's city followed by the package's country in the `h1` element.
    * Example: Bordeaux, France
  * Add an `ng-style` to the parent `section` element:
    * Set the `background-image` to the value of `image` on the package object.

<details>

<summary> Detailed Instructions </summary>

<br />



</details>

### Solution

<details>

<summary> <code> index.html </code> </summary>

```html
<!DOCTYPE html>
<html lang="en" ng-app="devmtnTravel">
  <head>
    <title>DevMtn Travels</title>

    <!-- META INFO -->
    <meta charset="UTF-8">
    <meta name="description" content="DevMtn Travels app using ui-routes ">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--RESET FILE -->
    <link rel="stylesheet" href="reset.css">

    <!--MAIN FILE-->
    <link rel="stylesheet" href="styles.css">

    <!-- View Styles -->
    <link rel="stylesheet" href="app/about/about.css">
    <link rel="stylesheet" href="app/about/adventurers/adventurers.css">
    <link rel="stylesheet" href="app/about/contact/contact.css">
    <link rel="stylesheet" href="app/locations/locations.css">
    <link rel="stylesheet" href="app/packages/packages.css">
    <link rel="stylesheet" href="app/booked/booked.css">
  </head>

  <body>
    <main role="main">
      <section class="home-page-top-container">
        <header>
          <nav>
            <ul>
              <!--Navigation Section-->
              <li><a ui-sref="locations">Locations</a></li>
              <li><a ui-sref="packages">Packages</a></li>
              <li><a><img src="./img/DevCircleWhite.svg" alt="DevMountain Logo"></a></li>
              <li><a ui-sref="home">About</a></li>
              <li><a ui-sref="contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        <h1 class="intro-text">Discover</h1>
      </section>

      <!-- Here we are placing the ui-view tag this is where our views will be injected when we change routes. -->
      <ui-view></ui-view>

    </main>

    <!-- Including angular and ui-router then our javascript files. ORDER MATTERS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.js"></script>

    <!--Our Custom Script Files-->
    <script src="app/app.js"></script>
    <script src="app/locations/locationsCtrl.js"></script>
    <script src="app/packages/packagesCtrl.js"></script>
    <script src="app/booked/bookedCtrl.js"></script>
    <script src="app/mainSrvc.js"></script>
  </body>
</html>
```

</details>

<details>

<summary> <code> bookedTmpl.html </code> </summary>

```html
<section class="booked-main-container" ng-style="{ 'background-image': 'url({{ package.image }})' }">
  <h1>Thanks for trusting us with your trip to <br>  {{ package.city }}, {{ package.country }}</h1>

  <!--This button needs a ui-sref that points to packages -->
  <button ui-sref="packages"> VIEW MORE PACKAGES </button>
</section>
```

</details>

<details>

<summary> <code> app/booked/bookedCtrl.js </code> </summary>

```js
angular.module('devmtnTravel').controller('bookedCtrl', function( $scope, $stateParams, mainSrvc ) {
  $scope.packages = mainSrvc.packageInfo;

  if ( $stateParams.id ) {
    $scope.packageId = $scope.packages.findIndex( function( package ) {
      return package.id === parseInt( $stateParams.id );
    }); 

    if ( $scope.packageId !== -1 ) {
      $scope.package = $scope.packages[ $scope.packageId ];
    }
  }
});
```

</details>

## Step to be determined

### Summary

In this step, we'll finish the template for `booked` by checking for the `id` on `$state.params` and assigning a value on `$scope` based on its value

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>


