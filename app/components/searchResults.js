angular.module('app')
.controller('SearchResultsCtrl', function($scope) {
})
.directive('searchResults', function() {
  return {
    scope: {
      videoSearchResults: '<',
      addToPlaylist: '<'
    },
    controller: 'SearchResultsCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/search-results.html'
  };
});