angular.module('app')
.controller('SearchCtrl', function($scope) {
  console.log($scope);
})
.directive('searchResults', function() {
  return {
    scope: {
      srv: '<'
    },
    controller: 'SearchCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/search-results.html'
  };
});