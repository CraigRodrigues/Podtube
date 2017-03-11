angular.module('app')
.controller('SearchCtrl', function($scope) {
})
.directive('searchResults', function() {
  return {
    scope: {
      videoSearchResults: '<',
      addToPlaylist: '<'
    },
    controller: 'SearchCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/search-results.html'
  };
});