angular.module('app')
.controller('AppCtrl', function() {

})
.directive('footer', function() {
  return {
    scope: {},
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/templates/footer.html'
  };
});