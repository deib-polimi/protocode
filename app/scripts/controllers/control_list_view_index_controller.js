App.ControlListViewIndexController = App.UiControlController.extend(App.ClickListenable, {
  needs: ['viewControllers'],

  isCreating: false,
  newNameListViewCell: 'newMenuItem',

   actions: {
    setCreating: function(value) {
      this.set('isCreating', value);
    },

    createListViewCell: function() {
      var name = this.get('newNameListViewCell');

      if (!name.trim()) { return; }

      var listViewCell = this.store.createRecord('listViewCell', {
        name: name,
        title: name
      });

      listViewCell.set('parentListView', this.get('model'));

      this.set('newNameListViewCell', 'newMenuItem');
      this.set('isCreating', false);

      listViewCell.save();
    }
  }
  
});