var app  = angular.module("app", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            "templateUrl" : "first.html",
            "controller" : "default"
        })

        .when("/second", {
            "templateUrl" : "second.html",
            "controller" : "second"
        })

        .when("/third", {
            "templateUrl" : "third.html",
            "controller" : "third"
        })
});

app.service('myservices',function(){

    var self=this;
    this .name='Sunil Mondal';
    this.namelength=function () {
      return self.name.length;
    };
});
