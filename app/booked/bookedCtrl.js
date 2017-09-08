angular.module('devmtnTravel').controller('bookedCtrl', function( $scope, $stateParams, mainSrvc ) {
  $scope.packages = mainSrvc.packageInfo;

  if ( $stateParams.id ) {
    $scope.packageIndex = $scope.packages.findIndex( function( package ) {
      return package.id === parseInt( $stateParams.id );
    }); 

    if ( $scope.packageIndex !== -1 ) {
      $scope.package = $scope.packages[ $scope.packageIndex ];
    }
  }
});