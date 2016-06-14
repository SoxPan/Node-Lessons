/**
 * Created by User on 6/13/2016.
 */
var app = angular.module('node-lessons', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider

        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainPageController'
        })

        .when('/register', {
            templateUrl: 'pages/register.html',
            controller: 'registerController'
        })

        .when('/news', {
            templateUrl: 'pages/news.html',
            controller: 'newsController'
        })

        .when('/blog', {
            templateUrl: 'pages/blog.html',
            controller: 'blogController'
        })

        .when('/login', {
            templateUrl: 'pages/login.html',
            controller: 'loginController'
        })
});
