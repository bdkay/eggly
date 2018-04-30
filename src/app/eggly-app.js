angular.module('Eggly', [
  'ui.router',
  'categories',
  'categories.bookmarks'
])
.config(function($stateProvider, $locationProvider, $urlRouterProvider){
  $stateProvider
  .state('eggly', {
    url: '',
    abstract: true
  });
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
})
