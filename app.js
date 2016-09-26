(function () {
'use strict';
  angular.module('ShoppingListCheckOff', [])

  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService){
    var buycontroller = this;
    buycontroller.items = ShoppingListCheckOffService.getItems();

    buycontroller.comprado = function(item){
      ShoppingListCheckOffService.comprado(item);
    };
  }



  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtcontroller = this;
    boughtcontroller.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService(){
    var service = this;
    service.comprar = [{name:'cookies',quantity:5},
                      {name:'candy',quantity:7},
                      {name:'Gummybears',quantity:12},
                      {name:'chocolates',quantity:6},
                      {name:'Pretzel',quantity:10}
                    ];

    service.comprados = [];

    service.getItems = function(){ return service.comprar;}
    service.getBoughtItems = function(){ return service.comprados;}

    service.comprado = function(item){
      var index = service.comprar.indexOf(item);
      service.comprar.splice(index, 1);

      service.comprados.push(item);
    };

  };

})();