'use strict';

angular.module('appointmentMakerApp')
  .service('Loginservice', function Loginservice() {
    
  	return {
  		login: function(){
     		console.log("logging in")
  			auth.login("google")
  				.then(function(user){
          			console.log(user)
          			$scope.$apply(function(){
       				$scope.user = user;
  			        $scope.thing = 'sfsfsf'
          			$rootScope.user = user;
      			    })
      			});
 			}
		};

	  });
