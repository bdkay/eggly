angular.module('categories', [
  'eggly.models.categories'
])
.config(function($stateProvider, $locationProvider){
  $stateProvider
    .state('eggly.categories', {
      url: '/',
      views: {
        'categories@': {
          controller: 'CategoriesCtrl',
          templateUrl: 'app/categories/categories.tmpl.html'
        },
        'bookmarks@': {
          controller: 'BookmarksListCtrl as bookmarksListCtrl',
          templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'
        }
      }
    })
  $locationProvider.html5Mode(true);
  })
  .controller('CategoriesCtrl', function CategoriesCtrl($scope){

  })
;
