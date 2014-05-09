App.AppMenuItemController = Ember.ObjectController.extend({
  needs: ['viewControllers'],
  
  actions: {
    delete: function() {
      var menuItem = this.get('model');
      menuItem.deleteRecord();
      menuItem.save();
    }
  }
});