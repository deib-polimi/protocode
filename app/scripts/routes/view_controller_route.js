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

      var uiControl = this.store.createRecord(controlType, {
        viewController: this.get('controller.model')
      });

      this.get('controller.model').save();

      if (receiver.get('context').constructor.toString() == 'App.Container') {
        uiControl.set('parentContainer', receiver.get('context'));
        receiver.get('context').save();
      }

      uiControl.save();
      
    }
  }
});
