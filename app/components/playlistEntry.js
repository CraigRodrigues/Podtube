angular.module('app')
.controller('PlayListEntryCtrl', function($scope) {
})
.directive('playlistEntry', function() {
  return {
    scope: {
      podcast: '<'
    },
    controller: 'PlayListEntryCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/playlist-entry.html'
  };
});