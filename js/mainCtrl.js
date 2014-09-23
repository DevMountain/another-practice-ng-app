var app = angular.module('shoppingList');

app.controller('mainCtrl', function($scope, mainService){
  $scope.showAddItem = false;
  $scope.showRemoveItem = false;
  $scope.list = mainService.getShoppingList();

  $scope.addItem = function(){
    $scope.showAddItem = !$scope.showAddItem;
  };

  $scope.removeItem = function(){
    $scope.showRemoveItem = !$scope.showRemoveItem;
  }

  $scope.submitItem = function(){
    mainService.addToShoppingList($scope.item);
    $scope.item = '';
    $scope.showAddItem = false;
  }

  $scope.submitItemToRemove = function(){
    mainService.removeItem($scope.itemToRemove);
    $scope.itemToRemove = '';
    $scope.showRemoveItem = false;
  }
})