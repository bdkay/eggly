angular.module('categories', [
  'eggly.models.categories'
])
.config(function($stateProvider){
  $stateProvider
    .state('categories', {
      url: '/',
      views: {
        'categories@': {
          controller: 'CategoriesCtrl',
          templateUrl: 'app/categories/categories.tmpl.html'
        },
        'bookmarks@': {
          controller: 'BookmarksCtrl',
          templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'
        }
      }
    })
  })
  .controller('CategoriesCtrl', function CategoriesCtrl($scope){

  })
  .controller('BookmarksCtrl', function BookmarksCtrl($scope){

  })
;
