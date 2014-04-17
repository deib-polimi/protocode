App.ViewControllerRoute = Ember.Route.extend({
  actions: {
    increaseZoom: function() {
      this.set('controller.zoomLevel', Math.round((this.get('controller.zoomLevel') + 0.2) * 100) / 100);
    },
    decreaseZoom: function() {
      this.set('controller.zoomLevel', Math.round((this.get('controller.zoomLevel') - 0.2) * 100) / 100);
    },
    addUiControl: function(controlType) {

      switch (controlType) {
        case 'button':
          var button = this.store.createRecord('button', {
            name: 'DummyButtonName',
            title: 'Dummy Button',
            viewController: this.get('controller.model')
          });

          button.save();
          break;

        case 'container':
        var button = this.store.createRecord('container', {
          name: 'DummyContainer',
          title: 'Dummy Container',
          viewController: this.get('controller.model')
        });

        button.save();
        break;
      }
      
    }
  }
});
