'use strict'

angular
  .module('theme.tables-editable', [])
  .controller('StoreController', ['$scope', '$filter', function ($scope, $filter) {
    $scope.myData = [{name: "Moroni", age: 50},
                     {name: "Tiancum", age: 43},
                     {name: "Jacob", age: 27},
                     {name: "Nephi", age: 29},
                     {name: "Enos", age: 34}];
    $scope.gridOptions = { 
        data: 'myData',
        enableCellSelection: true,
        enableRowSelection: false,
        enableCellEditOnFocus: true,
        columnDefs: [{field: 'name', displayName: 'Name', enableCellEdit: true}, 
                     {field:'description', displayName:'Description', enableCellEdit: true}]
    };

    $scope.users = [
      {id: 1, name: 'Store 1', url:'http://store1.com', email: 'store1@mail.com'},
      {id: 2, name: 'Store 2', url:'http://store2.com', email: 'store2@mail.com'},
      {id: 3, name: 'Store 3', url:'http://store3.com', email: 'store3@mail.com'},
      {id: 4, name: 'Store 4', url:'http://store4.com', email: 'store4@mail.com'},
      {id: 5, name: 'Store 5', url:'http://store5.com', email: 'store5@mail.com'},
      {id: 6, name: 'Store 6', url:'http://store6.com', email: 'store6@mail.com'}
    ];

    $scope.statuses = [
      {value: 1, text: 'status1'},
      {value: 2, text: 'status2'},
      {value: 3, text: 'status3'},
      {value: 4, text: 'status4'}
    ]; 

    $scope.groups = [
      {id: 1, text: 'MVP'},
      {id: 2, text: 'VIP'},
      {id: 3, text: 'ADMINS'},
      {id: 4, text: 'USER'}
    ];

    $scope.showGroup = function(user) {
      if(user.group && $scope.groups.length) {
        var selected = $filter('filter')($scope.groups, {id: user.group});
        return selected.length ? selected[0].text : 'Not set';
      } else {
        return user.groupName || 'Not set';
      }
    };

    $scope.showStatus = function(user) {
      var selected = [];
      if(user.status) {
        selected = $filter('filter')($scope.statuses, {value: user.status});
      }
      return selected.length ? selected[0].text : 'Not set';
    };

    $scope.saveUser = function(data, id) {
      //$scope.user not updated yet
      angular.extend(data, {id: id});
      // return $http.post('/saveUser', data);
    };

    // remove user
    $scope.removeUser = function(index) {
      $scope.users.splice(index, 1);
    };

    // add user
    $scope.addUser = function() {
      $scope.inserted = {
        id: $scope.users.length+1,
        name: '',
        status: null,
        group: null 
      };
      $scope.users.push($scope.inserted);
    };
  }])
