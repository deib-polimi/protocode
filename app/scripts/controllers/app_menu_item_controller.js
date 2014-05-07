App.AppMenuItemController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
      var menuItem = this.get('model');
      menuItem.deleteRecord();
      menuItem.save();
    }
  }
});