'use strict';

angular.module('appointmentMakerApp')
  .controller('HeaderCtrl', function ($scope, $location) {

  	$scope.isActive = function(viewLocation){
  		return viewLocation === $location.path();
  	}

  	$scope.loginBox = function(){
  		return auth.login('google');
  	}

  });
