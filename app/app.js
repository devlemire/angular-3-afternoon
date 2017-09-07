angular.module('devmtnTravel', ['ui.router']).config( function ( $stateProvider, $urlRouterProvider ) {
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: "js/about/aboutTmpl.html"
    });

  $urlRouterProvider
    .otherwise('/');
});
