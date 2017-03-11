angular.module('app')
.controller('PlayListCtrl', function() {
})
.directive('playlist', function() {
  return {
    scope: {
      podcastList: '<'
    },
    controller: 'PlayListCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/playlist.html'
  };
});