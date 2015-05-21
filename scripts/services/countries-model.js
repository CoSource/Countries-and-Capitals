angular.module('caps.models.countries', [])
    .service('CountriesModel', function ($http, $q) {
        var model = this,
        URLS = {
            FETCH: 'http://api.geonames.org/countryInfo?username=cosource'
        },
        countries;

        function extract(result) {
           var x2js = new X2JS();
           var json = x2js.xml_str2json(result.data);
           return json.geonames.country;
            //return result.data;
        }

        function cacheCountries(result) {
            countries = extract(result);
            return countries;
        }

        model.getCountries = function () {
            return (countries) ? $q.when(countries) : $http.get(URLS.FETCH).then(cacheCountries);
        };
       
    });
    