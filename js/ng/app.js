/**
 * Created by User on 6/13/2016.
 */
var app = angular.module('node-lessons', ['ngRoute', 'pascalprecht.translate' , 'ngMap']);

app.config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider

        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainPageController'
        })

        .when('/news', {
            templateUrl: 'pages/news.html',
            controller: 'newsController'
        })

        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'contentController'
        })

        .when('/feedback', {
            templateUrl: '/pages/contact.html',
            controller: 'feedbackController'
        })

        .when('/gallery', {
            templateUrl: '/pages/gallery.html',
            controller: 'galleryController'
        })

        .when('/github', {
            templateUrl: '/pages/github.html',
            controller: 'githubController'
        })

        .when('/github/:name', {
            templateUrl: '/pages/githubinner.html',
            controller: 'githubController'
        })
});

app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('ka', {
        'HOME': 'მთავარი',
        'NEWS': 'სიახლეები',
        'ABOUT': 'ჩვენ შესახებ',
        'GALLERY': 'გალერეა',
        'CONTACT': 'კონტაქტი',
        'SEARCH': 'ძიება საიტზე',
        'CATEGORIES': 'კატეგორიები',
        'GITHUB' : 'გიტჰაბის პროფილები'
    });

    $translateProvider.translations('en', {
        'HOME': 'Home',
        'NEWS': 'News',
        'ABOUT': 'About us',
        'GALLERY': 'Gallery',
        'CONTACT': 'Contact',
        'SEARCH': 'Search...',
        'CATEGORIES': 'Categories',
        'GITHUB' : 'Github Accounts'
    });

    $translateProvider.preferredLanguage('ka');
}]);

app.controller('Ctrl', ['$translate' , '$scope', function ($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };

}]).directive('newsblock', function() {
    return {
        restrict: 'E',
        templateUrl: '/pages/news.html'
    };
});

app.controller('HeaderCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});
