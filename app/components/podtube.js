angular.module('app')
.controller('PodtubeCtrl', function() {
  this.videos = window.exampleVideoData;
  console.log('search results videos', this.videos);
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