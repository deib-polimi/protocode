App.ControlPhotocameraControllerIndexController = App.UiControlController.extend({
  allowedImageViews: function () {
    return this.get('imageViews').filterBy('sourceType.type', 'hardwareFile');
  }.property('imageViews.@each'),

  actions: {
    acceptChanges: function() {
      this._super();
      
      if (this.get('model.imageView')) {
        this.get('model.imageView').save();
      }
    }
  }
  
});