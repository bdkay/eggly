angular.module('eggly.models.categories', [

])
.service('CategoriesModel', function ($http, $q) {
  var model = this,
  URLS = {
    FETCH: 'data/categories.json'
  },
  categories,
  currentCategory;

  function extract(result) {
    return result.data;
  }

  function cacheCategories(result) {
    categories = extract(result);
    return categories;
  }

  //If categories exists, return a promise with when. It takes an object and wraps a promise around it. In the promise, put the categories
  model.getCategories = function() {
    return (categories) ? $q.when(categories) : $http.get(URLS.FETCH).then(cacheCategories);
  };

  model.getCategoryByName = function(categoryName){
    //create deferred object
    var deferred = $q.defer();

    //loop over categories, compare name of current category to categoryName, find the category with that name
    function findCategory(){
      return _.find(categories, function(c){
        return c.name = categoryName;
      })
    }

    //if categories exists, resolve promise with the results of findCategory
    if (categories){
      deferred.resolve(findCategory());
    //if categories does not exist, call getCategories, take the result and resolve the promise
    } else {
      model.getCategories()
        .then(function(result){
          deferred.resolve(findCategory());
        })
    }

    //return promise object on that deferred object, can manually resolve or reject promise
    return deferred.promise;
  };

  model.setCurrentCategory = function(category) {
    return model.getCategoryByName(category).then(function(category) {
      currentCategory = category;
    })
  };

  model.getCurrentCategory = function() {
    return currentCategory;
  };

  model.getCurrentCategoryName = function() {
    return currentCategory ? currentCategory.name : '';
  };

  model.getCategoryByName = function(categoryName) {
    var deferred = $q.defer();

    function findCategory(){
      return _.find(categories, function(c){
        return c.name == categoryName;
      })
    }

    if(categories) {
      deferred.resolve(findCategory());
    } else {
      model.getCategories()
      .then(function() {
        deferred.resolve(findCategory());
      });
    }

    return deferred.promise;
  };


})
;
