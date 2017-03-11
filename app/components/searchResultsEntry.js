angular.module('app')
.controller('SearchResultsCtrl', function() {
  this.addToPlaylist = () => {
    console.log('Add to playlist!');
  }
})
.directive('searchResultsEntry', function() {
  return {
    scope: {},
    controller: 'SearchResultsCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/search-results-entry.html'
  };
});