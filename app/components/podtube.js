angular.module('app')
.controller('PodtubeCtrl', function($http) {

  this.playlist = [];

  this.getPlaylist = () => {
    $http.get('http://localhost:8080/podcasts/playlist').then(function mySuccess(response) {
      console.log(response);

    }, function myError(response) {
      console.log(response.statusText);
    });
  }

  this.searchYoutube = (input) => {
    let that = this;
    let config = {
      params: {
        query: input
      }
    };

    $http.get('http://localhost:8080/podcasts/search', config).then(function mySuccess(response) {
      that.videos = response.data.items;
      if (!that.playList) {
        that.getPlaylist();
      }
    }, function myError(response) {
      console.log(response.statusText);
    });
  };

  this.addToPlaylist = (video) => {
    let config = {
      currentPlaylist: this.playlist,
      data: video.id.videoId
    };

    let that = this;

    // Get video url and do POST request to my API to get the correct audio url
    $http.post('http://localhost:8080/podcasts/playlist', config).then(function mySuccess(response) {

      let audioArray = response.data.formats;

      let podcastAudioUrlList = audioArray.filter(audioUrl => audioUrl.format === 'audio only');
      console.log(podcastAudioUrlList);

      let audioUrl;

      podcastAudioUrlList.length > 0 ? audioUrl = podcastAudioUrlList[0].url : audioUrl = audioArray[0].url;

      console.log(audioUrl);

      // Construct object for playlist entry
      let newVideo = {
        title: video.snippet.title,
        audioUrl: audioUrl,
        thumbnail: video.snippet.thumbnails.medium.url,
      };

      that.playlist.push(newVideo);
    }, function myError(response) {
      console.log(response.statusText);
    });
  };

  // Default videos
  this.videos = this.searchYoutube('Ted Talks');

  // Init saved playlist
  // this.getPlaylist();
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