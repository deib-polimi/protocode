App.UiControlTemplateController = Ember.ObjectController.extend({
  needs: ['editor'],

  imageSource: function() {
    return '/images/ui_controls/' + this.get('controllers.editor.platform') + '/' + this.get('model.nameImg');
  }.property('controllers.editor.platform'),
  
  actions: {
  }
});