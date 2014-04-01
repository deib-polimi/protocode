App.Router.map(function () {
  
  this.resource('editor', function() {
  	this.resource('viewControllers', function() {
      this.resource('viewController', {path: '/viewController/:viewController_id'}, function() {

      });
  	});
  });

  this.resource('about');
});
