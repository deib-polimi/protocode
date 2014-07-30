App.ViewControllerIndexController = Ember.ObjectController.extend(App.Saveable, {

  actions: {
    createAlertDialog: function(value) {
      var viewController = this.get('model');

      var alertDialog = this.store.createRecord('alertDialog', {
        viewController: viewController
      });

      alertDialog.save();
      viewController.save();
    },

    deleteViewController: function() {
      if (confirm('Are you sure to delete?')) {
        var viewController = this.get('model');

        viewController.deleteRecord();
        viewController.save();

        this.transitionToRoute('/editor/viewControllers');
      }
    }
  }
});