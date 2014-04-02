App.ViewControllersRoute = Ember.Route.extend({
  init: function() {
    this._super();
    this.generateController('uiControls', []).set('model', this.store.find('uiControl'));
  },

  model: function () {
      return this.store.find('viewController');
  }
});
