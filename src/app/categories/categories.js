angular.module('categories', [
  'eggly.models.categories'
])
.config(function($stateProvider, $locationProvider){
  $stateProvider
    .state('eggly.categories', {
      url: '/',
      views: {
        'categories@': {
          controller: 'CategoriesListCtrl as categoriesListCtrl',
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
  .controller('CategoriesListCtrl', function CategoriesCtrl(CategoriesModel){
    var categoriesListCtrl = this;
    categoriesListCtrl.categories = CategoriesModel.getCategories();
  })
;
