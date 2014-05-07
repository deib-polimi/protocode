App.AppMenuItemIndexController = App.AppMenuItemController.extend({
  actions: {
    delete: function() {
      this._super();
      this.transitionToRoute('viewController');
    }
  }
});