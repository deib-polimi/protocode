App.EditorRoute = Ember.Route.extend({
    model: function () {
      
        return Ember.RSVP.hash({
          application: this.store.find('application').then(function(dataArray) {
            return dataArray.objectAt(0);
          }),
          devices: this.store.find('device')
        });
    },
    setupController: function(controller, model) {
      this._super(controller, model);
      controller.set('model', model.application);
      controller.set('devices', model.devices);
      controller.set('deviceModel', model.devices.findBy('id', this.get('deviceId')));
    }
});
