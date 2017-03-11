angular.module('app')
.controller('SearchCtrl', function() {
  console.log('Inside controller');
  console.log(window.exampleVideoData);
  console.log(window.exampleAudioData[0].formats[15].url);
  // this.searchYoutube = () => {
  //   console.log('Search clicked!');
  // };
  this.videoQueryResults = [];
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