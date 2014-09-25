App.EditorRoute = Ember.Route.extend({
    model: function () {
      
        return Ember.RSVP.hash({
          application: this.store.find('application').then(function(dataArray) {
            return dataArray.objectAt(0);
          }),
          devices: this.store.find('device'),
          // Used to fetch all parts
          navigations: this.store.find('navigation'),
          clickListeners: this.store.find('clickListener'),
          sourceTypes: this.store.find('sourceType'),
          asyncTasks: this.store.find('asyncTask'),
          menuItems: this.store.find('menuItem'),
          alertDialogs: this.store.find('alertDialog'),
          progressDialogs: this.store.find('progressDialog'),
          viewControllers: this.store.find('viewController'),
          menu: this.store.find('menu'),
        });
    },
    setupController: function(controller, model) {
      this._super(controller, model);
      controller.set('model', model.application);
      controller.set('devices', model.devices);
      controller.set('deviceModel', model.devices.findBy('id', this.get('deviceId')));
    }
});
