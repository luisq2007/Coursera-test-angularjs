 (function () {
'use strict';
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItems)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json");
	

	function FoundItems() {
		var ddo = {
			templateUrl: 'template.html',
			scope: {
				foundElements: '<',
				onRemove: '&'
			},
			controller: 'NarrowItDownController',
			controllerAs: 'list',
			bindToController: true
		};

		return ddo;
	}



	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
		var elementos = this;
		var call_made = false;
		elementos.found = [];
		elementos.buscar = function () {
			call_made = true;
			var promise = MenuSearchService.getMatchedMenuItems(elementos.frase);
			
			promise.then(function (response) {
			  //console.log("el arreglo respuesta: ",response);
			  elementos.found = response;
			})
			.catch(function (error) {
			  //console.log(error);
			})
		};		

		elementos.removeItem = function (itemIndex) {
			elementos.found.splice(itemIndex, 1);
		};  

		//elementos.listavacia = true;
		elementos.listavacia = function () {
			//console.log (call_made);
			//console.log (elementos.frase);
			//console.log ("prueba");
			if (!call_made){
				return false;
			}else if ((elementos.found.length==0) || (elementos.frase == null) ){
				//console.log (elementos.found.length);
				//console.log (elementos.frase);
				return true;
			}else{
				return false;
			}

			
		};

	}

	MenuSearchService.$inject = ['$http', 'ApiBasePath']
	function MenuSearchService($http, ApiBasePath) {
		var service = this;
		var elementos_encontrados=[];

		service.getMatchedMenuItems = function (searchTerm) {
			if (searchTerm != null){
				searchTerm = searchTerm.toLowerCase();
			}
			var response = $http({
			  method: "GET",
			  url: (ApiBasePath)
			}).then(function successCallback(response) {
				var json_respuesta = response.data.menu_items;
				elementos_encontrados=[];
			    for (var i = 0; i < json_respuesta.length; i++) {
					var name = json_respuesta[i].name;
					if (name.toLowerCase().indexOf(searchTerm) !== -1) {
						elementos_encontrados.push(json_respuesta[i]);
					}
			    }
				return elementos_encontrados;
			}, function errorCallback(response) {
				
			});
			return response;
		
		};
	}

})();