App.ControlAudioRecorderIndexController = App.UiControlController.extend({
  actions: {
    acceptChanges: function() {
      this._super();
      
      if (this.get('model.audioPlayer')) {
        this.get('model.audioPlayer').save();
      }
    }
  }
  
});