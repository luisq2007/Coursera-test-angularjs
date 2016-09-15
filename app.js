(function () {
	'use strict';

	angular.module('Luis_Assignment1', [])

	.controller('Luis_Assignment1_controller1', function ($scope) {
		$scope.ProcesarLunch = function () {
			var arrayOfStrings = $scope.lunch.split(',');
			if ((arrayOfStrings.length > 0) && (arrayOfStrings.length > 3) && $scope.lunch.length > 0){
				$scope.Mensaje = "Too much!";
			}else if ((arrayOfStrings.length > 0) && (arrayOfStrings.length <= 3) && $scope.lunch.length > 0){
				$scope.Mensaje = "Enjoy!!";
			}else {
				$scope.Mensaje = "Please enter data first";
			}
		};

	});


})();
