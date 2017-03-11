angular.module('app')
.controller('SearchCtrl', function() {
  this.videos = window.exampleVideoData;
  console.log('search results videos', this.videos);
})
.directive('searchResults', function() {
  return {
    scope: {},
    controller: 'SearchCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/search-results.html'
  };
});