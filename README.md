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
    <link rel="stylesheet" href="app/locations/locations.css">
    <link rel="stylesheet" href="app/packages/packages.css">
    <link rel="stylesheet" href="app/contact/contact.css">
    <link rel="stylesheet" href="app/booked/booked.css">
  </head>

  <body>
    <main role="main">
      <section class="home-page-top-container">
        <header>
          <nav>
            <ul>
              <!--Navigation section, this is where you will put your ui-sref's so you can naviagte to different views -->
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

## Step 4

### Summary

In this step, we'll test the controllers we just made to make sure everything is hooked up correctly.

## Step 5

### Summary

In this step, we'll hook up the `ui-sref`'s in the template HTML files to allow the user to navigate the application.

## Step 6

### Summary

In this step, we'll hook up the controllers to pull data from `mainSrvc`.

## Step 7

### Summary

In this step, we'll finish the template for `booked` by checking for the `id` on `$state.params` and assigning a value on `$scope` based on its value

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>


