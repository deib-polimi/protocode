App.ViewControllerIndexController = Ember.ObjectController.extend(App.Saveable, {
  actions: {
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