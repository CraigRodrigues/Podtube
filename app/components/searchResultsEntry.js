angular.module('app')
.controller('SearchResultsEntryCtrl', function() {
  // this.addToPlaylist = () => {
  //   console.log('Add to playlist!');
  // }
})
.directive('searchResultsEntry', function() {
  return {
    scope: {
      video: '<',
      addToPlaylist: '<'
    },
    controller: 'SearchResultsEntryCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/search-results-entry.html'
  };
});