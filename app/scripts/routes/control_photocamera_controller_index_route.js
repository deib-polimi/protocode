App.ControlPhotocameraControllerIndexRoute = Ember.Route.extend({
    setupController: function(controller, model) {
      this._super(controller, model);
      //TODO: queries are not supported in Fixtures
      //controller.set('imageViews', this.store.find('imageView', {viewController: model.get('viewController')}));
      controller.set('imageViews', this.store.find('imageView'));
    }
});
