'use strict';

describe('Service: Gigservice', function () {

  // load the service's module
  beforeEach(module('appointmentMakerApp'));

  // instantiate service
  var Gigservice;
  beforeEach(inject(function (_Gigservice_) {
    Gigservice = _Gigservice_;
  }));

  it('should do something', function () {
    expect(!!Gigservice).toBe(true);
  });

});
