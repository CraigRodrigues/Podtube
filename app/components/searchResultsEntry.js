angular.module('app')
.controller('AppCtrl', function() {

})
.directive('searchResultsEntry', function() {
  return {
    scope: {},
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/search-results-entry.html'
  };
});