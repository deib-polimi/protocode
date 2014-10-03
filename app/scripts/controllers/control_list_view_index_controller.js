App.ControlListViewIndexController = App.UiControlController.extend(App.ClickListenable, {
  needs: ['viewControllers'],

  isCreating: false,
  newNameListViewCell: 'newMenuItem',

   actions: {
    abortCreation: function() {
      this.set('isCreating', false);
    },

    setCreating: function(value) {
      this.set('isCreating', value);
    },

    createListViewCell: function() {
      var name = this.get('newNameListViewCell').trim();

      if (!name) { return; }

      var listViewCell = this.store.createRecord('listViewCell', {
        name: name.replace(/ /g, ''),
        title: name
      });

      listViewCell.set('parentListView', this.get('model'));

      this.set('newNameListViewCell', 'newMenuItem');
      this.set('isCreating', false);

      listViewCell.save();

      this.set('isCreating', true);
    }
  }
  
});