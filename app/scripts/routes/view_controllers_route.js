App.ViewControllersRoute = Ember.Route.extend({
  init: function() {
    this._super();
    this.generateController('uiControlTemplates', []).set('model', this.store.find('uiControlTemplate'));
  },

  model: function () {
      return this.store.find('application', 'newAppId').then(function(app) {
        return app.get('viewControllers');
      });
      /*this.store.findAll('viewController');*/
  }
});
