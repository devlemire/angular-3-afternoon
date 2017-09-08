angular.module('devmtnTravel').controller('locationsCtrl', function( $scope, mainSrvc ) {
  $scope.locations = mainSrvc.travelInfo;
});