'use strict'

angular
	.module('theme.signup-controller', [])
  	.controller('SignupController', ['$scope', 'CredentialService', '$http', function ($scope, CredentialService, $http) {

		$scope.master = {};
		$scope.showmsg = false;

		CredentialService.islogged();

		$scope.login = function(user) {
			CredentialService.login(user, $scope);
			$scope.master = angular.copy(user);
		};

		$scope.reset = function() {
			$scope.user = {};
			$scope.remember_me = false;
		};

		$scope.reset();

  	}]);
