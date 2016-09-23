(function () {
'use strict';

var shoppingList_compra = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Pretzel",
    quantity: "7"
  }
];

var shoppingList_listo = [];
angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope) {
  $scope.shoppingList_compra = shoppingList_compra;
  $scope.shoppingList_listo = shoppingList_listo;

  $scope.addToList = function () {
    var newItem = {
      name: $scope.newItemName,
      quantity: $scope.newItemQuantity
    };

    
  };

  $scope.Message_buy = function () {
    if(shoppingList_compra == 0) {
      return "Everything is bought!"
    }else {
      return "";
    }

    
  };
  $scope.Message_bought = function () {
    if (shoppingList_listo.length == 0){
      return "Nothing bought yet";
    }else {
      return "";
    }

    
  };

  $scope.removeItem = function (itemIndex) {
    
    var newItem = {
      name: shoppingList_compra[itemIndex].name,
      quantity: shoppingList_compra[itemIndex].quantity
    };
    $scope.shoppingList_listo.push(newItem);
    $scope.shoppingList_compra.splice(itemIndex, 1);

  };
}

})();
