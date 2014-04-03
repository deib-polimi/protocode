App.ViewControllersController = Ember.ArrayController.extend({
  isCreating: false,
  newNameViewController: 'newView',

  needs: ['uiControlTemplates'],

  actions: {
    setCreating: function(value) {
      this.set('isCreating', value);
    },

  	createViewController: function() {
  		var name = this.get('newNameViewController');

      if (!name.trim()) { return; }

      var viewController = this.store.createRecord('viewController', {
        name: name
      });

      this.set('newNameViewController', 'newView');
      this.set('isCreating', false);

      viewController.save();
  	}
  }
});