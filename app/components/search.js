angular.module('app')
.controller('AppCtrl', function() {

})
.directive('search', function() {
  return {
    scope: {},
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/search.html'
  };
});