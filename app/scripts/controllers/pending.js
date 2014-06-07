'use strict';

angular.module('appointmentMakerApp')
  .controller('PendingCtrl', function ($scope, gigsFromGigService, Gigservice) {

	$scope.gigs = gigsFromGigService;
	$scope.gigs.$bind($scope, "gigs");

	$scope.confirm = Gigservice.confirmGig;
	$scope.unconfirm = Gigservice.unconfirmGig;

});
