var app = angular.module('myApp',['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'tpl/Home.html',
        controller: 'myController'
    })
    .when('/about', {
        templateUrl: 'tpl/About.html',
        controller: 'AboutController'
    })
    .when('/contact', {
        templateUrl: 'tpl/Contact.html',
        controller: 'ContactController'
    })
    .when('/test', {
        templateUrl: 'tpl/Test.html',
        controller: 'TestController'
    });
}]);