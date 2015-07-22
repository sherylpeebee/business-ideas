angular.module("hypothesis")
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('uniqueLink', {url: '/uniqueLink', templateUrl: '/views/uniqueLink.html', controller: 'ideaCtrl'})
  .state('newIdea', {url: '/newIdea', templateUrl: '/views/newIdea.html', controller: 'ideaCtrl'});
}]);
