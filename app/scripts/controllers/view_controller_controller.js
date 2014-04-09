App.ViewControllerController = Ember.ObjectController.extend({
  needs: ['editor'],
  isActive: false,
  zoomLevel: 1,

  actions: {
    increaseZoom: function() {
      this.set('zoomLevel', Math.round((this.get('zoomLevel') + 0.2) * 100) / 100);
    },
    decreaseZoom: function() {
      this.set('zoomLevel', Math.round((this.get('zoomLevel') - 0.2) * 100) / 100);
    },
    addUiControl: function(controlType) {
      var button = this.store.createRecord('button', {
        name: 'DummyButtonName',
        title: 'Dummy Button',
        viewController: this.get('model')
      });

      button.save();

    }
  }
});