angular.module('app')
.controller('AppCtrl', function() {

})
.directive('top', function() {
  return {
    scope: {},
    controller: 'AppCtrl',
    transclude: true,
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/top.html'
  };
});