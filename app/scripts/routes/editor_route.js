App.EditorRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('application', 1);
    },
    setupController: function(controller, model) {
      this._super(controller, model);

      this.store.find('device').then(function(data) {
        controller.set('devices', data);
      });
      
    }
});
