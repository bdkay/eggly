angular.module('categories.bookmarks.edit', [

])
  .config(function($stateProvider){
      $stateProvider
        .state('eggly.categories.bookmarks.edit', {
        url: '/bookmarks/edit',
        templateUrl: 'app/categories/bookmarks/create/bookmark-edit.tmpl.html',
        controller: 'EditBookmarkCtrl as editBookmarkCtrl'
      });
  })
  .controller('EditBookmarkCtrl', function(){

  })
;
