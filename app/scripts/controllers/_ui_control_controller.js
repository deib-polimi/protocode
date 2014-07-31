App.UiControlController = Ember.ObjectController.extend(App.Saveable, {

  actions: {
    deleteUiControl: function() {
      var controlToDelete = this.get('model');

      if (this.get('parentContainer')) {
        var uiControls = this.get('parentContainer.uiControls');
        uiControls.removeObject(controlToDelete);
        this.get('parentContainer').save(); 
      }
      
      else {
        var viewController = this.get('viewController');
        viewController.get('uiControls').then(function (uiControls) {
          uiControls.removeObject(controlToDelete);
          viewController.save();
        });
        
      }

      controlToDelete.deleteRecord();
      controlToDelete.save();
      
      this.transitionToRoute('viewController');
    }
  }

});