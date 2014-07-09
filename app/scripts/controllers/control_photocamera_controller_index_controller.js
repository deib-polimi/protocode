App.ControlPhotocameraControllerIndexController = App.UiControlController.extend({
  actions: {
    acceptChanges: function() {
      this._super();
      
      if (this.get('model.imageView')) {
        this.get('model.imageView').save();
      }
    }
  }
  
});