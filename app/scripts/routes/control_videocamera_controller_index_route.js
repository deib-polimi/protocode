App.ControlVideocameraControllerIndexRoute = Ember.Route.extend({
    setupController: function(controller, model) {
      this._super(controller, model);
      //TODO: queries are not supported in Fixtures
      controller.set('videoViews', this.store.find('videoView'));
    }
});
