'use strict';

angular.module('appointmentMakerApp')
  .controller('SubmitCtrl', function ($scope, Gigservice) {

  	$scope.potentialGig = {
  		confirmed: false,
  		confirmedByAll: false
  	};


	var dateField = document.getElementById('date');
	var dangerButton = document.getElementById('submitButton');

  	$scope.dateCheck = false;

  	$scope.reset = function(){
  		$scope.potentialGig = {
  			confirmed: false,
  			confirmedByAll: false
  		};
  		dangerButton.classList.remove("btn-warning");
		dangerButton.innerHTML = "Submit!"
		dateField.parentElement.parentElement.classList.remove("has-error");
  	}

	$scope.submit = function(gigDetailsFromForm){
		if (gigDetailsFromForm.Date){
			console.log(gigDetailsFromForm.Date);
			gigDetailsFromForm.confirmed = false;
			console.log(gigDetailsFromForm)
			// submittedGig = angular.extend(submittedGig, formData);
			console.log("submitting...");
			Gigservice.postGig(gigDetailsFromForm);
			console.log('form submitted');
			$scope.reset();
		} else {
			console.log("no date added");
			dateField.parentElement.parentElement.classList.add("has-error");
			dangerButton.innerHTML = "Fill in the date!";
			dangerButton.classList.add("btn-warning");
			// $scope.dateCheck = true;
		}
	}



  });
