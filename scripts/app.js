angular.module('caps', ['ngRoute', 'ngFx', 'ngAnimate', 'countries', 'country'])
    .constant('config', {
         'userName': 'cosource'
     })
    .run(function ($rootScope, $location, $timeout) {
        $rootScope.$on('$routeChangeError', function () {
            $location.path("/error");
        });
        $rootScope.$on('$routeChangeStart', function () {
            $rootScope.isLoading = true;
        });
        $rootScope.$on('$routeChangeSuccess', function () {
            $timeout(function () {
                $rootScope.isLoading = false;
            }, 1000);
        });
    })
     .config(function ($routeProvider) {
         $routeProvider.when('/', {
             templateUrl: './views/home.html',
             controller: 'HomeController as hc'
         })
        .when('/countries', {
            templateUrl: './views/countries.html',
            controller: 'CountriesController as cc'
        })
         .when('/countrydetails/:countryCode', {
             templateUrl: './views/countrydetails.html',
             controller: 'CountryDetailsController as cdc'
         })
         .otherwise({
             redirectTo: '/'
         });
     });
   
	
   
    