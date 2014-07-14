'use strict';

var app = angular.module('appointmentMakerApp', ['ui.router', 'ui.bootstrap', 'firebase']);

var chatRef = new Firebase('https://flickering-fire-9095.firebaseio.com');

// var express = require('express');
// console.log(express);

// var auth = new FirebaseSimpleLogin(chatRef, function(error, user, usersArray) {
//   if (error) {
//     // an error occurred while attempting login
//     console.log(error);
//   } else if (user) {
//     // user authenticated with Firebase
//     console.log('Name: ' + user.displayName + ', User ID: ' + user.uid + ', Provider: ' + user.provider);
//     console.log(user.displayName);
//   } else {
//     // user is logged out
//   }
// });


app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

$stateProvider
	.state('submitpage', {
		url: '/',
		templateUrl: 'views/submit.html',
		controller: 'SubmitCtrl'
	})
	.state('pending', {
		url: '/pending',
		templateUrl: 'views/pending.html',
		controller: 'PendingCtrl',
		resolve: {
			gigsFromGigService: function(Gigservice){
				return Gigservice.getGigs();
			}
		}
	});
});