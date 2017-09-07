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

Let's begin by opening `app/app.js`. In order for a user to navigate our Angular application, we'll need to add the remaining views into your router configuration. We can add more routes to our configuration by chaining on more `.state`s. All our additions will look similiar except for `adventurers` and `contact`. These routes will also include a `parent` property. This is what makes a route a sub-route. We'll assign the parent as `home` to make them sub-routes of `home`.

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

And then finally we can add the route for `adventurers` and `contact` which will have a `parent` of `home`.

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

In this step, we'll create Angular controllers for `locations`, `packages`, and `booked`.

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


