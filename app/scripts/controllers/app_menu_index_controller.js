App.AppMenuIndexController = Ember.ObjectController.extend({
  isCreating: false,
  newNameMenuItem: 'newMenuItem',

  actions: {
    setCreating: function(value) {
      this.set('isCreating', value);
    },

    createMenuItem: function() {
      var name = this.get('newNameMenuItem');

      if (!name.trim()) { return; }

      var menuItem = this.store.createRecord('menuItem', {
        name: name,
        title: name
      });

      menuItem.set('parentMenu', this.get('model'));

      this.set('newNameViewController', 'newView');
      this.set('isCreating', false);

      menuItem.save();
    }
  }
});