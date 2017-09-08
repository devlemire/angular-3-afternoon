angular.module('devmtnTravel').controller('packagesCtrl', function( $scope, $stateParams, mainSrvc ) {
  $scope.allPackages = mainSrvc.packageInfo;

  if ( $stateParams.country ) {
    $scope.packages = $scope.allPackages.filter( function( package ) {
      return package.country === $stateParams.country;
    });
  }
});