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