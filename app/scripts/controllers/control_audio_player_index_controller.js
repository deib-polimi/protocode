App.ControlAudioPlayerIndexController = App.UiControlController.extend({
  actions: {
    acceptChanges: function() {
      this._super();
      this.get('model.sourceType').save();
    }
  }
  
});