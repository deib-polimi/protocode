App.ButtonView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-button', 'expanded'],
  classNameBindings: ['controller.controllers.editor.device.platform'],
  templateName: 'views/button_view'

});