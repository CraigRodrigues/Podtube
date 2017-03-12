angular.module('app')
.controller('PlayListEntryCtrl', function($scope) {
  this.favorite = () => {
    this.podcast.favorite = !this.podcast.favorite;
    console.log(this.podcast.favorite);
    console.log(this.podcast);
  };
})
.directive('playlistEntry', function() {
  return {
    scope: {
      podcast: '<',
      selectVideo: '<'
    },
    controller: 'PlayListEntryCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/playlist-entry.html'
  };
});