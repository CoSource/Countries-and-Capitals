angular.module('country', [
    'caps.models.country'
])
    .controller('CountryDetailsController', function ($http, $window, $routeParams, CountryModel) {
        var vm = this;

        CountryModel.getCountry().then(function(result) {
            return CountryModel.getCapitalPopulation()
        }).then(function(result) {
            return CountryModel.getNeighbours()
        }).then(function(result) {
            vm.country = result;
        });

});