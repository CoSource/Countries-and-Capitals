angular.module('countries', [
    'caps.models.countries'
])
    .controller('CountriesController', function (CountriesModel, $window, $scope) {
        var vm = this;

        CountriesModel.getCountries()
            .then(function (result) {
                vm.countries = result;
            });

        vm.setSelected = function (country) {
            vm.selected = country;
            $window.location.href = '#/countrydetails/' + country.countryCode;
            $scope.$apply();
        };

    });