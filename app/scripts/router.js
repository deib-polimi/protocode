App.Router.map(function () {
  
  this.resource('editor', function() {
  	this.resource('viewControllers', function() {
      this.resource('viewController', {path: '/viewController/:viewController_id'}, function() {
        this.resource('dispatchUiControl', {path: '/uiControl/:ui_control_id'});
        this.resource('controlButton', {path: '/button/:button_id'}, function () {
        });
        this.resource('controlContainer', {path: '/container/:container_id'}, function () {
        });
        this.resource('controlEditText', {path: '/editText/:editText_id'}, function () {
        });
        this.resource('controlImageView', {path: '/imageView/:imageView_id'}, function () {
        });
        this.resource('controlLabel', {path: '/label/:label_id'}, function () {
        });
        this.resource('controlWebView', {path: '/webView/:webView_id'}, function () {
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
