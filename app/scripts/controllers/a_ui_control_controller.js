App.UiControlController = Ember.ObjectController.extend({

  actions: {
    acceptChanges: function() {
      this.get('model').save();
    }
  }
});