describe('Testing countries controller', function(){

    var $scope, ctrl, $window, $timeout;

    var getCountriesMock;

    beforeEach(function () {

        getCountriesMock = jasmine.createSpyObj('CountriesModel', ['getCountries']);

        module('countries', ['caps.models.countries']);

        inject(function ($rootScope, $controller, $q, _$window_, _$timeout_) {

            $scope = $rootScope.$new();
            getCountriesMock.getCountries.andReturn($q.when());
            $window = _$window_;
            $timeout = _$timeout_;

            ctrl = $controller('CountriesController', {
                CountriesModel: getCountriesMock,
                $window: $window,
                $scope: $scope
            });

        });

    });

    //  Test to see the selected country works

    it('Should check to see the select country is correct, when selected', function () {
        // Setup
        var vm = ctrl;
        var country = { countryName: "Australia", countryCode: "AU", capital: "Canberra", areaInSqKm: 7686850, continent: "OC" };

        // Call
        $scope.setSelected(country);

        // Assert
        expect(vm.selected).toEqual(country);

    });

    

})