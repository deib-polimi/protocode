App.ButtonView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-button'],
  classNameBindings: ['controller.controllers.editor.platform'],
  templateName: 'views/button_view'

});