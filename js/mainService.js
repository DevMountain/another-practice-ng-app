var app = angular.module('shoppingList');

app.factory('mainService', function(){
  var shoppingList = ['Hot Dogs', 'Hot Pockets', 'Tums'];

  var obj = {};
  obj.addToShoppingList = function(item){
    shoppingList.push(item);
  }

  obj.getShoppingList = function(){
    return shoppingList;
  }

  obj.removeItem = function(item){
    var index = shoppingList.indexOf(item);
    if(index !== -1){
      shoppingList.splice(index, 1);
    }
  }
  return obj;
});