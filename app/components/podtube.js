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

  // API call to query the current playlist
  this.getPlaylist = () => {
    let that = this;

    $http.get('http://localhost:8080/podcasts/playlist').then(function mySuccess(response) {
      console.log(response);
      that.playlist = response.data;
    }, function myError(response) {
      console.log(response.statusText);
    });
  }

  this.selectVideo = (video) => {
    console.log(video);
    this.currentPodcast = video;
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

      // If playlist is empty attempt to populate it from DB
      // if (!that.playList) {
      //   that.getPlaylist();
      // }
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

    console.log(newVideo);

    this.playlist.push(newVideo);

    // let config = {
    //   currentPlaylist: this.playlist,
    //   data: video.id.videoId
    // };

    // let that = this;

    // // Get video url and do POST request to my API to get the correct audio url
    // $http.post('http://localhost:8080/podcasts/playlist', config).then(function mySuccess(response) {

    //   let audioArray = response.data.formats;

    //   let podcastAudioUrlList = audioArray.filter(audioUrl => audioUrl.format === 'audio only');
    //   console.log(podcastAudioUrlList);

    //   let audioUrl;

    //   podcastAudioUrlList.length > 0 ? audioUrl = podcastAudioUrlList[0].url : audioUrl = audioArray[0].url;

    //   console.log(audioUrl);

    //   // Construct object for playlist entry
    //   let newVideo = {
    //     title: video.snippet.title,
    //     audioUrl: audioUrl,
    //     thumbnail: video.snippet.thumbnails.medium.url,
    //   };

    //   that.playlist.push(newVideo);
    // }, function myError(response) {
    //   console.log(response.statusText);
    // });
  };

  this.removeFromPlaylist = (video) => {
    $http.post('http://localhost:8080/podcasts/playlist', config).then(function mySuccess(response) {
      that.videos = response.data.items;

      // If playlist is empty attempt to populate it from DB
      if (!that.playList) {
        that.getPlaylist();
      }
    }, function myError(response) {
      console.log(response.statusText);
    });
  }

  // Default videos
  this.videos = this.searchYoutube('School of Life');
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