App.ViewControllerRoute = Ember.Route.extend({
  zIndex: 5,
  
  actions: {
    increaseZoom: function() {
      this.set('controller.zoomLevel', Math.round((this.get('controller.zoomLevel') + 0.2) * 100) / 100);
    },
    decreaseZoom: function() {
      this.set('controller.zoomLevel', Math.round((this.get('controller.zoomLevel') - 0.2) * 100) / 100);
    },
    addUiControl: function(controlType, receiver) {
      console.log('Receiver of drop event: ' + receiver.get('context.name'));
      console.log('Type of receiver: ' + receiver.get('context').constructor.toString());

      var uiControl = {};

      switch (controlType) {
        case 'button':
          var uiControl = this.store.createRecord('button', {
            name: 'DummyButtonName',
            title: 'Dummy Button',
            viewController: this.get('controller.model')
          });

          break;

        case 'container':
        var uiControl = this.store.createRecord('container', {
          name: 'DummyContainer',
          title: 'Dummy Container',
          viewController: this.get('controller.model')
        });

        break;
      }

      if (receiver.get('context').constructor.toString() == 'App.Container') {
        uiControl.set('parentContainer', receiver.get('context'));
      }

      uiControl.save();
      
    }
  }
});
