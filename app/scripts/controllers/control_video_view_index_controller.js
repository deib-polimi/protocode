App.ControlVideoViewIndexController = Ember.ObjectController.extend(App.Saveable, {
  actions: {
    acceptChanges: function() {
      this._super();
      this.get('model.sourceType').save();
    }
  }
  
});