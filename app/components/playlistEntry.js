angular.module('app')
.controller('AppCtrl', function() {

})
.directive('playlistEntry', function() {
  return {
    scope: {},
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/playlist-entry.html'
  };
});