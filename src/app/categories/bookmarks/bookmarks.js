angular.module('categories.bookmarks', [
  'categories.bookmarks.create',
  'categories.bookmarks.edit',
  'eggly.models.categories',
  'eggly.models.bookmarks'
])
.config(function($stateProvider, $locationProvider){
  $stateProvider
    .state('eggly.categories.bookmarks', {
      url: 'categories/:category',
      views: {
        'bookmarks@': {
          templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html',
          controller: 'BookmarksListCtrl as bookmarksListCtrl'
        }
      }
    });
  $locationProvider.html5Mode(true);
})
.controller('BookmarksListCtrl', function ($stateParams, CategoriesModel, BookmarksModel) {
  var bookmarksListCtrl = this;

  CategoriesModel.setCurrentCategory($stateParams.category);

  BookmarksModel.getBookmarks()
  .then(function (bookmarks) {
    bookmarksListCtrl.bookmarks = bookmarks;
  });

  bookmarksListCtrl.getCurrentCategory = CategoriesModel.getCurrentCategory;
  bookmarksListCtrl.getCurrentCategoryName = CategoriesModel.getCurrentCategoryName;
});
