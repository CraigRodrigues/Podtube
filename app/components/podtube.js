angular.module('app')
.controller('PodtubeCtrl', function() {
  // this.videos = window.exampleVideoData;
  this.videos;
  console.log('search results videos', this.videos);

  this.searchYoutube = () => {
    this.videos = window.exampleVideoData;
    console.log('Search clicked!');
  };
})
.directive('podtube', function() {
  return {
    scope: {},
    controller: 'PodtubeCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/podtube.html'
  };
});