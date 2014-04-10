App.ControlButtonIndexController = Ember.ObjectController.extend({
  actions: {
    acceptChanges: function() {
      this.get('model').save();
    }
  }
});