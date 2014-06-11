App.ViewControllersController = Ember.ArrayController.extend({
  isCreating: false,
  newNameViewController: 'newView',

  needs: ['uiControlTemplates', 'editor'],

  actions: {
    setCreating: function(value) {
      this.set('isCreating', value);
    },

  	createViewController: function() {
  		var name = this.get('newNameViewController');

      if (!name.trim()) { return; }

      // Application model is in editor.model
      var viewController = this.store.createRecord('viewController', {
        name: name,
        application: this.get('controllers.editor.model')
      });

      this.set('newNameViewController', 'newView');
      this.set('isCreating', false);

      viewController.save();
  	}
  }
});