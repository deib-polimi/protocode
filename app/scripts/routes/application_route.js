App.ApplicationRoute = Ember.Route.extend({
  // admittedly, this should be in IndexRoute and not in the
  // top level ApplicationRoute; we're in transition... :-)
  model: function () {
    return 0;
    //return this.store.findAll('viewController');
  },

  actions: {

    deleteApp: function () {
      this.store.find('device').then(
        function (data) {
          data.forEach(function (device) {
            Ember.run.once(this, function () {
              device.destroyRecord();
            });

          });
        });

      this.store.find('menu').then(
        function (menus) {
          menus.forEach(function (menu) {
            Ember.run.once(this, function () {
              menu.destroyRecord();
            });
          });
        });

      this.store.find('application').then(
        function (data) {
          data.forEach(function (appToDelete) {
            Ember.run.once(this, function () {
              appToDelete.destroyRecord();
            });
          });


        });


      this.store.find('uiControlTemplate').then(
        function (data) {
          data.forEach(function (uiControlTemplate) {
            Ember.run.once(this, function () {
              uiControlTemplate.destroyRecord();
            });
          });
        });

      /*this.store.findAll('viewController').then(
        function (data) {
          data.forEach(function (uiControlTemplate) {
            Ember.run.once(this, function () {
            uiControlTemplate.destroyRecord();
          });
          });
        });*/

      this.store.find('uiControl').then(function (array) {
        array.forEach(function (data) {
          Ember.run.once(this, function () {
            data.destroyRecord();
          });
        });
      });

    },

    createApp: function () {
      var self = this;

      this.store.createRecord('viewController').save();
      this.store.createRecord('device', {
        name: 'iPhone5s',
        label: 'iPhone 5s',
        platform: 'ios',
        viewTop: 0,
        viewBottom: 568,
        screenWidth: 320,
        screenHeight: 568,
        cssWidth: 312,
        cssHeight: 556
      }).save().then(function (device) {
        self.store.createRecord('menu').save().then(function (newMenu) {
          self.store.createRecord('application', {
            id: 'newAppId'
          }).save().then(function (app) {
            app.set('device', device);
            app.set('menu', newMenu);
            app.save();
            newMenu.save();
            device.save();
          });
          
        });
      });
      this.store.createRecord('device', {
        name: 'Nexus5',
        label: 'Nexus 5',
        platform: 'android',
        viewTop: 73,
        viewBottom: 638,
        screenWidth: 388.31460674,
        screenHeight: 690.33707866,
        minHeight: 50,
        cssWidth: 353,
        cssHeight: 624
      }).save();


      this.store.createRecord('uiControlTemplate', {
        label: 'Container View',
        nameImg: 'container.png',
        type: 'container'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Button',
        nameImg: 'button.png',
        type: 'button'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Label',
        nameImg: 'label.png',
        type: 'label'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Edit Text',
        nameImg: 'edittext.png',
        type: 'editText'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Web View',
        nameImg: 'webview.png',
        type: 'webView'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Image View',
        nameImg: 'imageview.png',
        type: 'imageView'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Video View',
        nameImg: 'videoview.png',
        type: 'videoView'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Audio Player',
        nameImg: 'audioplayer.png',
        type: 'audioPlayer'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'List View',
        nameImg: 'listview.png',
        type: 'listView'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Grid View',
        nameImg: 'gridview.png',
        type: 'gridView'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Photocamera Controller',
        nameImg: 'photocameracontroller.png',
        type: 'photocameraController'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Videocamera Controller',
        nameImg: 'videocameracontroller.png',
        type: 'videocameraController'
      }).save();
      this.store.createRecord('uiControlTemplate', {
        label: 'Audio Recorder',
        nameImg: 'audiorecorder.png',
        type: 'audioRecorder'
      }).save();


    }
  }
});