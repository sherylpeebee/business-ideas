angular.module("hypothesis")
.controller("ideaCtrl", ["$scope", "$http", function($scope, $http){
  $scope.test = "helllooooooo!!!";
  $scope.sendHypothesis = function(h){
    console.log("sending");
    $http.post("/h", h)
    .then(function(data){
      console.log(data);
    });
  };
}]);
