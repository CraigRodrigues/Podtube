angular.module('app')
.controller('SearchCtrl', function() {
  this.query = '';
  this.clearSearch = () => {
    this.query = '';
    console.log('clear')
  }
})
.directive('search', function() {
  return {
    scope: {
      searchYoutube: '<'
    },
    controller: 'SearchCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/search.html'
  };
});