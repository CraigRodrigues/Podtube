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
  player.onended = () => {
    // find podcast in playlist and update the one in the playlist not the current playlist one
    console.log('ended');
    let i = this.podcastPlaylist.indexOf(this.podcast);
    console.log(this.podcastPlaylist[i]);
    // send up the chain to render update immediately?
    this.podcastPlaylist[i].played = true;
  }

  // Custom audio controls
  this.previous = () => {
    let i = this.podcastPlaylist.indexOf(this.podcast);
    if (this.podcastPlaylist[i - 1]) {
      this.selectVideo(this.podcastPlaylist[i - 1]);
    }
  };
  this.next = () => {
    let i = this.podcastPlaylist.indexOf(this.podcast);
    if (this.podcastPlaylist[i + 1]) {
      this.selectVideo(this.podcastPlaylist[i + 1]);
    }
  };
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
      podcastPlaylist: '<',
      podcast: '<',
      audio: '<',
      selectVideo: '<'
    },
    controller: 'PodcastPlayerCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/podcast-player.html'
  };
});