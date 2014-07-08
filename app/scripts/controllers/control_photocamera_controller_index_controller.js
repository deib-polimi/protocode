App.ControlPhotocameraControllerIndexController = Ember.ObjectController.extend(App.Saveable, {
  actions: {
    acceptChanges: function() {
      this._super();
      
      if (this.get('model.imageView')) {
        this.get('model.imageView').save();
      }
    }
  }
  
});