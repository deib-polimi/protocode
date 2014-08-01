App.ControlVideocameraControllerIndexController = App.UiControlController.extend({
  allowedVideoViews: function () {
    return this.get('videoViews').filterBy('sourceType.type', 'hardwareFile');
  }.property('videoViews.@each'),

  actions: {
    acceptChanges: function() {
      this._super();
      
      if (this.get('model.videoView')) {
        this.get('model.videoView').save();
      }
    }
  }
  
});