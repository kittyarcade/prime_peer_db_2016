console.log( 'js' );
// hook up NG
var myApp = angular.module( 'myApp', [] );

// create a controller
myApp.controller( 'Controller', [ '$scope', '$http', function( $scope, $http ){
  console.log( 'blerg' );

  }]);
