App.ControlAudioPlayerIndexController = Ember.ObjectController.extend(App.Saveable, {
  actions: {
    acceptChanges: function() {
      this.get('model.sourceType').save();
    }
  }
  
});