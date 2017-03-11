angular.module('app')
.controller('AppCtrl', function() {

})
.directive('playlist', function() {
  return {
    scope: {},
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/playlist.html'
  };
});