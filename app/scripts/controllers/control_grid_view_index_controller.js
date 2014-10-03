App.ControlGridViewIndexController = App.UiControlController.extend(App.ClickListenable, {
  needs: ['viewControllers'],

  isCreating: false,
  newNameGridViewCell: 'newMenuItem',

   actions: {
    abortCreation: function() {
      this.set('isCreating', false);
    },

    setCreating: function(value) {
      this.set('isCreating', value);
    },

    createGridViewCell: function() {
      var name = this.get('newNameGridViewCell').trim();

      if (!name) { return; }

      var gridViewCell = this.store.createRecord('gridViewCell', {
        name: name.replace(/ /g, ''),
        title: name
      });

      gridViewCell.set('parentGridView', this.get('model'));

      this.set('newNameGridViewCell', 'newMenuItem');
      this.set('isCreating', false);

      gridViewCell.save();

      this.set('isCreating', true);
    }
  }
  
});