angular.module('app')
.controller('AppCtrl', function() {

})
.directive('nav', function() {
  return {
    scope: {},
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/navigation.html'
  };
});