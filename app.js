// create angular app
var examApp = angular.module('examApp', ['ngRoute','ngAnimate']);//

// create angular controller
examApp.controller('mainController', function($scope) {

	// function to submit the form after all validation has occurred			
	$scope.submitForm = function(frm) {
    frm.submitted = true;
		// check to make sure the form is completely valid
		if (frm.$valid) { 
			alert('our form is amazing');
		}

	};

}).controller('secondController', function($scope) {



})