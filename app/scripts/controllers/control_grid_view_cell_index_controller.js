App.ControlGridViewCellIndexController = Ember.ObjectController.extend(App.Saveable, App.Deletable, {
  actions: {
    delete: function() {
      var cellToDelete = this.get('model');
      var parentView = cellToDelete.get('parentGridView');
      
      parentView.get('gridViewCells').then(function(cellItems) {
        cellItems.removeObject(cellToDelete);
        parentView.save();
      });

      this._super();
    }
  }
  
});