App.AppMenuItemIndexController = Ember.ObjectController.extend(App.Saveable, App.Deletable, {
  needs: ['viewControllers'],

  actions: {
    delete: function() {
      var menuItemToDelete = this.get('model');
      var menu = menuItemToDelete.get('parentMenu');
      
      this.get('parentMenu.menuItems').then(function(menuItems) {
        menuItems.removeObject(menuItemToDelete);
        menu.save();
      });

      this._super();
    }
  }
});