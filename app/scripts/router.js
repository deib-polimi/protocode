App.Router.map(function () {
  
  this.resource('editor', function() {
  	this.resource('viewControllers', function() {
      this.resource('viewController', {path: '/viewController/:viewController_id'}, function() {
        this.resource('dispatchUiControl', {path: '/uiControl/:ui_control_id'});
        this.resource('controlButton', {path: '/button/:button_id'}, function () {
        });
        this.resource('controlContainer', {path: '/container/:container_id'}, function () {
        });
        this.resource('appMenu', {path: '/menu/:menu_id'}, function () {
        });
        this.resource('appMenuItem', {path: '/menuItem/:menu_item_id'}, function () {
        });
      });
  	});

    this.resource('uiControls', function() {

    });
  });

  this.resource('about');
});
