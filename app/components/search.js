angular.module('app')
.controller('SearchCtrl', function() {
  console.log(window.exampleVideoData);
  console.log(window.exampleAudioData[0].formats[15].url);

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