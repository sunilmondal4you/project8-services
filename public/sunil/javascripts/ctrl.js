var app = angular.module("app");

app.controller("default",['$scope','$log','myservices' function($scope,$log,myservices) {
    $scope.name='main';
    $log.log(myservices.name);
    $log.log(myservices.namelength);

}]);

app.controller("second", function($scope){


});


app.controller("third", function($scope){


});