angular.module('app')
.controller('SearchCtrl', function() {
  console.log('Inside controller');
  this.searchYoutube = function() {
    console.log('Search clicked!');
  };
})
.directive('search', function() {
  return {
    scope: {},
    controller: 'SearchCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/search.html'
  };
});