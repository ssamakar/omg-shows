'use strict';

angular.module('appointmentMakerApp')
  .controller('HeaderCtrl', function ($scope, $rootScope, $location, Loginservice) {

  	$scope.isActive = function(viewLocation){
  		return viewLocation === $location.path();
  	};

    $scope.otherThing = 'sfsfffsfsfsfsfsf';

  	$scope.loginBox = function(){
      Loginservice.login();
    };

  	$scope.logout = function(){
  		console.log("logging out")
  		return auth.logout();
  	};

  });
