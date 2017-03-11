angular.module('app')
.controller('PodtubeCtrl', function() {
  // this.videos = window.exampleVideoData;
  this.videos;
  this.playlist = [{
    title: 'The power of believing that you can improve | Carol Dweck',
    audioUrl: 'https://r1---sn-vgqs7nes.googlevideo.com/videoplayback?mv=m&upn=1xbrwNI2yMc&id=o-AAWSc6rGb-xgFO2QIUffpnAzEG8oNyyE6-vQjVNlKBlc&mm=31&mn=sn-vgqs7nes&ms=au&mt=1489202844&gir=yes&ip=104.197.75.157&key=yt6&requiressl=yes&ei=EW_DWKOpEJGGuQL35Y7QAQ&lmt=1454325624985051&mime=audio%2Fwebm&expire=1489224561&sparams=clen%2Cdur%2Cei%2Cgir%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Ckeepalive%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Crequiressl%2Csource%2Cupn%2Cexpire&keepalive=yes&source=youtube&dur=282.001&itag=251&pl=20&initcwndbps=8971250&ipbits=0&clen=4327017&signature=26593BFC6EEF4647DD611939AF054419D314D76C.56065A74AD98E53D0F9F0CDD38D48A0AE4342EEF&ratebypass=yes&title=Self+Compassion',
    thumbnail: 'https://i.ytimg.com/vi/_X0mgOOSpLU/hqdefault.jpg'
  },
  {
    title: 'The power of believing that you can improve | Carol Dweck',
    audioUrl: 'https://r1---sn-vgqs7nes.googlevideo.com/videoplayback?mv=m&upn=1xbrwNI2yMc&id=o-AAWSc6rGb-xgFO2QIUffpnAzEG8oNyyE6-vQjVNlKBlc&mm=31&mn=sn-vgqs7nes&ms=au&mt=1489202844&gir=yes&ip=104.197.75.157&key=yt6&requiressl=yes&ei=EW_DWKOpEJGGuQL35Y7QAQ&lmt=1454325624985051&mime=audio%2Fwebm&expire=1489224561&sparams=clen%2Cdur%2Cei%2Cgir%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Ckeepalive%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Crequiressl%2Csource%2Cupn%2Cexpire&keepalive=yes&source=youtube&dur=282.001&itag=251&pl=20&initcwndbps=8971250&ipbits=0&clen=4327017&signature=26593BFC6EEF4647DD611939AF054419D314D76C.56065A74AD98E53D0F9F0CDD38D48A0AE4342EEF&ratebypass=yes&title=Self+Compassion',
    thumbnail: 'https://i.ytimg.com/vi/_X0mgOOSpLU/hqdefault.jpg'
  }];

  this.searchYoutube = () => {
    this.videos = window.exampleVideoData;
    console.log('Search clicked!');
  };

  this.addToPlaylist = () => {
    this.playlist.push('test');
    console.log(this.playlist);
    console.log('Added to playlist');
  }
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