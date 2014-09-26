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
          listViewCells: this.store.find('listViewCell'),
          gridViewCells: this.store.find('gridViewCell'),
          alertDialogs: this.store.find('alertDialog'),
          progressDialogs: this.store.find('progressDialog'),
          // UiControls
          audioPlayers: this.store.find('audioPlayer'),
          audioRecorders:  this.store.find('audioRecorder'),
          buttons:  this.store.find('button'),
          editTexts:  this.store.find('editText'),
          gridViews:  this.store.find('gridView'),
          imageViews:  this.store.find('imageView'),
          labels:  this.store.find('label'),
          listViews:  this.store.find('listView'),
          photocameraControllers:  this.store.find('photocameraController'),
          videoViews:  this.store.find('videoView'),
          videocameraControllers:  this.store.find('videocameraController'),
          webViews:  this.store.find('webView'),

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
