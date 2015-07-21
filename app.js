// create angular app
var examApp = angular.module('examApp', ['ngRoute','ngAnimate']);//
examApp.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'main.html',
    controller: 'mainController',
  })
   .when('/success', {
    templateUrl: 'success.html',
    controller: 'successController',

  })
  .otherwise({
      redirectTo: '/'
  });

  // configure html5 to get links working on jsfiddle
  //$locationProvider.html5Mode(true);
});
// create angular controller
examApp.controller('mainController', function($scope, $location) {

	// function to submit the form after all validation has occurred			
	$scope.submitForm = function(frm) {
    frm.submitted = true;
		// check to make sure the form is completely valid
		if (frm.$valid) {
            $scope.$parent.user = $scope.user;
            $location.path('/success')

		}

	};

})
.controller('successController', function($scope) {
      alert('success')
        $scope.user = $scope.$parent.user || {};

}).controller('appController', function($scope) {



})