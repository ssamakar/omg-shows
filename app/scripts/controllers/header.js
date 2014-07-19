'use strict';

angular.module('appointmentMakerApp')
  .controller('HeaderCtrl', function ($scope, $rootScope, $location) {

  	$scope.isActive = function(viewLocation){
  		return viewLocation === $location.path();
  	}

    $scope.otherThing = 'sfsfffsfsfsfsfsf'

  	$scope.loginBox = function(){
      console.log("logging in")
  		auth.login("google")
        .then(function(user){
          console.log(user)
          $scope.$apply(function(){
          $scope.user = user;
          $scope.thing = 'sfsfsf'
          $rootScope.user = user;
          })
        })
  	}

  	$scope.logout = function(){
  		console.log("logging out")
  		return auth.logout();
  	}

  });
