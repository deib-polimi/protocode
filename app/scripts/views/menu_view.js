App.MenuvView = Ember.View.extend({
  tagName: 'div',
  classNames: ['app-menu'],
  classNameBindings: ['controller.controllers.editor.device.platform'],
  templateName: 'views/menu_view'

});