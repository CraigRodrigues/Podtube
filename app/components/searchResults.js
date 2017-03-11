angular.module('app')
.controller('AppCtrl', function() {

})
.directive('searchResults', function() {
  return {
    scope: {},
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/search-results.html'
  };
});