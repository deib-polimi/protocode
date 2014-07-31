App.ViewControllerIndexController = Ember.ObjectController.extend(App.Saveable, {

  actions: {
    createAsyncTask: function(value) {
      var viewController = this.get('model');

      var asyncTask = this.store.createRecord('asyncTask', {
        viewController: viewController
      });

      asyncTask.save();
      viewController.save();
    },

    createAlertDialog: function(value) {
      var viewController = this.get('model');

      var alertDialog = this.store.createRecord('alertDialog', {
        viewController: viewController
      });

      alertDialog.save();
      viewController.save();
    },

    createProgressDialog: function(value) {
      var viewController = this.get('model');

      var progressDialog = this.store.createRecord('progressDialog', {
        viewController: viewController
      });

      progressDialog.save();
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