angular.module('app')
.controller('PodcastPlayerCtrl', function($scope) {
  let that = this;
  this.player = player = document.getElementById('audioPlayer');

  $scope.$watch('ctrl.audio', function(newVal, oldVal) {
    player.src = newVal;
    player.currentTime = that.podcast.currentPosition;
  });

  // Keep track of the current position of any podcast in the list
  player.onpause = () => {
    this.podcast.currentPosition = player.currentTime;
  };

  // Custom audio controls
  this.previous = () => {
    console.dir(player);
    console.log(this.podcast.currentPosition);
  };
  this.next;
  this.skipBackwards = () => {
    player.currentTime -= 30;
  };
  this.skipForwards = () => {
    player.currentTime += 30;
  }
  this.changeSpeed = () => {
    const speed = {
      '0.5': 1,
      '1': 1.5,
      '1.5' : 2,
      '2' : 0.5
    }
    player.playbackRate = speed[player.playbackRate];
    console.log(player.playbackRate);
  };
})
.directive('podcastPlayer', function() {
  return {
    scope: {
      podcast: '<',
      audio: '<'
    },
    controller: 'PodcastPlayerCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/podcast-player.html'
  };
});