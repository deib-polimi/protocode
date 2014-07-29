App.ControlVideocameraControllerIndexController = App.UiControlController.extend({
  actions: {
    acceptChanges: function() {
      this._super();
      
      if (this.get('model.videoView')) {
        this.get('model.videoView').save();
      }
    }
  }
  
});