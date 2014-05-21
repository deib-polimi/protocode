App.UiEditTextView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-edit-text', 'expanded'],
  classNameBindings: ['controller.controllers.editor.device.platform'],
  templateName: 'views/ui_edit_text_view'

});