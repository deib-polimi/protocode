App.UiControlController = Ember.ObjectController.extend(App.Saveable, {

  actions: {
    deleteUiControl: function() {
      var self = this;
      if (this.get('parentContainer')) {
        var uiControls = this.get('parentContainer.uiControls');
        uiControls.removeObject(self);
        this.get('parentContainer').save(); 
      }
      
      else {
        var viewController = this.get('viewController');
        viewController.get('uiControls').then(function (uiControls) {
          uiControls.removeObject(self);
          viewController.save();
        });
        
      }
      this.get('model').deleteRecord();
      this.get('model').save();
      this.transitionToRoute('/editor/viewControllers');
    }
  }

});