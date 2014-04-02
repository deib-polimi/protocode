App.ViewControllerIndexController = Ember.ObjectController.extend({
  actions: {
  	acceptChanges: function() {
  		if (!Ember.isEmpty(this.get('model.name'))) {
        this.get('model').save();
      }
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