App.AsyncTaskIndexController = Ember.ObjectController.extend(
  App.Saveable, 
  App.Deletable,
  {
    actions: {
      delete: function() {
        var viewController = this.get('viewController');
        this._super();
        viewController.save();
      }
    }
});