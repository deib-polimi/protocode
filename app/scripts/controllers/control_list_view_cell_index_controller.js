App.ControlListViewCellIndexController = Ember.ObjectController.extend(App.Saveable, App.Deletable, {
  actions: {
    delete: function() {
      var cellToDelete = this.get('model');
      var parentView = cellToDelete.get('parentListView');
      
      parentView.get('listViewCells').then(function(cellItems) {
        cellItems.removeObject(cellToDelete);
        parentView.save();
      });

      this._super();
    }
  }
  
});