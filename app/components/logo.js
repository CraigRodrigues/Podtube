angular.module('app')
.controller('AppCtrl', function() {

})
.directive('logo', function() {
  return {
    scope: {},
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/logo.html'
  };
});