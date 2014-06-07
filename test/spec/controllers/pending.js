'use strict';

describe('Controller: PendingCtrl', function () {

  // load the controller's module
  beforeEach(module('appointmentMakerApp'));

  var PendingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PendingCtrl = $controller('PendingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
