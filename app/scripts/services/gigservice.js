'use strict';

angular.module('appointmentMakerApp')
  .service('Gigservice', function Gigservice($firebase) {

  	var db = new Firebase("https://flickering-fire-9095.firebaseio.com/gigs");
  	var gigsOnDb = $firebase(db);
    
  	return {
  		getGigs: function(){
  			console.log(gigsOnDb)
  			return gigsOnDb;
  			// return db;
			},
		postGig: function(newGig){
			db.push(newGig);
			// gigs.unshift(newGig);
			},
		confirmGig: function(gigID){
			console.log(db);
			return gigsOnDb.$child(gigID).$child("confirmed").$set(true);
			},
		unconfirmGig: function(gigID){
			return gigsOnDb.$child(gigID).$child("confirmed").$set(false);
		}
		}
	});

