App.Router.map(function () {
  
  this.resource('editor', function() {
  	this.resource('viewControllers', function() {
      this.resource('viewController', {path: '/viewController/:viewController_id'}, function() {
        this.resource('controlButton', {path: '/button/:button_id'}, function () {
        });
        this.resource('controlContainer', {path: '/container/:container_id'}, function () {
        });
      });
  	});

    this.resource('uiControls', function() {

    });
  });

  this.resource('about');
});
