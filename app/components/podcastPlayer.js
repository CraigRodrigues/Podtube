angular.module('app')
.controller('PodcastPlayerCtrl', function() {
  this.player = player = document.getElementById('audioPlayer');

  this.podcast;
  this.previous = () => {
    console.log(player);
  };
  this.next;
  this.skipBackwards = () => {
    console.log()
  };
  this.skipForwards;
  this.changeSpeed;
})
.directive('podcastPlayer', function() {
  return {
    scope: {},
    controller: 'PodcastPlayerCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/podcast-player.html'
  };
});