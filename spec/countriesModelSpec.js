describe("countries model api service", function () {
    var countriesModelService, httpBackend;

    beforeEach(module("caps.models.countries"));

    beforeEach(inject(function (_countriesModel_, $httpBackend) {
        countriesModelService = _countriesModel_;
        httpBackend = $httpBackend;
    }));

    it("should do something", function () {
        httpBackend.whenGET("http://api.geonames.org/countryInfo?username=cosource").respond({
            data: {
                children: [
                  {
                      geonames: {
                          countryName: "Austria"
                      }
                  },
                  {
                      geonames: {
                          countryName: "Australia"
                      }
                  },
                  {
                      geonames: {
                          countryName: "Belgium"
                      }
                  },
                  {
                      geonames: {
                          countryName: "Canada"
                      }
                  }
                ]
            }
        });
        countriesModelService.getCountries().then(function (cacheCountries) {
            expect(cacheCountries).toEqual(["Australia", "Canada"]);
        });
        httpBackend.flush();
    });

});