angular.module('app')
.controller('PodtubeCtrl', function($http) {

  // Initialize the playlist
  this.playlist = [
    {
      channel: "The School of Life",
      channelUrl: "https://www.youtube.com/channel/UC7IcJI8PUf5Z3zKxnZvTBog",
      currentPosition: 0,
      favorite: false,
      month: "February",
      played: false,
      title: "How To Be Confident",
      videoUrl: "https://www.youtube.com/watch?v=0Tk82hEHNnY",
      year: 2017
    }
  ];

  this.currentPodcast = this.playlist[0];
  this.currentAudio;

  // API call to query the current playlist
  this.getPlaylist = (callback) => {
    let that = this;

    $http.get('http://localhost:8080/podcasts/playlist').then(function mySuccess(response) {
      that.playlist = response.data;
      callback();
    }, function myError(response) {
      console.log(response.statusText);
    });
  }

  this.updatePlaylist = (playlist) => {
    let that = this;

    let config = {
      data: playlist
    };

    $http.post('http://localhost:8080/podcasts/playlist', config).then(function mySuccess(response) {
      console.log(response.data);
    }, function myError(response) {
      console.log(response.statusText);
    });
  }

  this.getAudio = (videoUrl, callback) => {
    let that = this;
    let config = {
      data: videoUrl
    };

    // Get video url and do POST request to my API to get the correct audio url
    $http.post('http://localhost:8080/podcasts/search', config).then(function mySuccess(response) {

      let audioUrl;
      let audioArray = response.data.formats;
      let podcastAudioUrlList = audioArray.filter(audioUrl => audioUrl.format === 'audio only');

      podcastAudioUrlList.length > 0 ? audioUrl = podcastAudioUrlList[0].url : audioUrl = audioArray[0].url;

      callback(audioUrl);
    }, function myError(response) {
      console.log(response.statusText);
    });
  }

  this.selectVideo = (video) => {
    let that = this;

    this.getAudio(video.videoUrl, function(audioUrl) {
      that.currentAudio = audioUrl;
      that.currentPodcast = video;
    });
  }

  // API call to search youTube videos
  this.searchYoutube = (input) => {
    let that = this;
    let config = {
      params: {
        query: input
      }
    };

    $http.get('http://localhost:8080/podcasts/search', config).then(function mySuccess(response) {
      that.videos = response.data.items;
    }, function myError(response) {
      console.log(response.statusText);
    });
  };

  // Parses video data from youTube API object
  this.parseVideo = {
    date(date) {
      let dateObj = new Date(date);
      const month = ['January', 'February','March','April','May','June','July','August','September','October','November', 'December'];
      return {
        month: month[dateObj.getMonth()],
        year: dateObj.getFullYear()
      }
    },
    videoUrl(videoId) {
      return `https://www.youtube.com/watch?v=${videoId}`;
    },
    channelUrl(channelId) {
      return `https://www.youtube.com/channel/${channelId}`;
    },
    title(name) {
      // Capitalize first letter of any titles
      return `${name[0].toUpperCase()}${name.slice(1)}`;
    }
  };

  this.addToPlaylist = (video) => {

    // Parse readable date from ISO date
    let date = this.parseVideo.date(video.snippet.publishedAt);

    // Construct new video object
    let newVideo =  {
      title: this.parseVideo.title(video.snippet.title),
      channel: this.parseVideo.title(video.snippet.channelTitle),
      month: date.month,
      year: date.year,
      videoUrl: this.parseVideo.videoUrl(video.id.videoId),
      channelUrl: this.parseVideo.channelUrl(video.snippet.channelId),
      currentPosition: 0,
      played: false,
      favorite: false
    };

    // Only push if the video isn't in the list
    let found = this.playlist.find(podcast => podcast.videoUrl === newVideo.videoUrl);

    if (!found) {
      this.playlist.push(newVideo);
    }

    this.updatePlaylist(this.playlist);
  };

  this.removeFromPlaylist = (video) => {
    let index = this.playlist.findIndex(podcast => podcast.videoUrl === video.videoUrl);
    this.playlist.splice(index, 1);
    this.updatePlaylist(this.playlist);
  }

  // Default video search and current podcast
  this.getPlaylist(() => this.searchYoutube('Hack Reactor Interview'));
  this.selectVideo(this.playlist[0]);
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