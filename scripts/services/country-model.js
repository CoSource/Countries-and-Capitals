angular.module('caps.models.country',[])
    .service('CountryModel', function ($http, $q, $routeParams) {
        var model = this, country;

        function extract(result) {
            return result.data.geonames[0];
        }

        function extractPopulation(result) {
            country.captialPopulation = result.data.geonames[0].population;
            return country;
        }

        function extractNeighbours(result) {
            country.neighbours = result.data.geonames;
            return country;
        }

        function cacheCountry(result) {
            country = extract(result);
            //
            // Add the additional country attributes
            //
            country.countryImageURL = 'http://www.geonames.org/img/country/250/' + country.countryCode + '.png';
            country.countryFlagURL = 'http://www.geonames.org/flags/m/' + angular.lowercase(country.countryCode) + '.png';
            return country;
        }

        model.getCountry = function () {
            //url = 'http://api.geonames.org/countryInfoJSON?country=' + $routeParams.countryCode + '&username=' + config.userName;
            url = 'http://api.geonames.org/countryInfoJSON?country=' + $routeParams.countryCode + '&username=cosource';
            return $http.get(url).then(cacheCountry);
        };

        model.getCapitalPopulation = function () {
            //url = 'http://api.geonames.org/searchJSON?featureCode=PPLC&name_equals=' + encodeURI(country.capital) + '&maxRows=1&username=' + config.userName;
            url = 'http://api.geonames.org/searchJSON?featureCode=PPLC&name_equals=' + encodeURI(country.capital) + '&maxRows=1&username=cosource';
            return $http.get(url).then(extractPopulation);
        };

        model.getNeighbours = function () {
            //url = 'http://api.geonames.org/neighboursJSON?geonameId=' + country.geonameId + '&username=' + config.userName;
            url = 'http://api.geonames.org/neighboursJSON?geonameId=' + country.geonameId + '&username=cosource';
            return $http.get(url).then(extractNeighbours);
        };

    });