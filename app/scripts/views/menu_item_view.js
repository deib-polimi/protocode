App.MenuItemvView = Ember.View.extend({
  tagName: 'div',
  classNames: ['app-menu-item'],
  classNameBindings: ['controller.controllers.editor.device.platform'],
  templateName: 'views/menu_item_view'

});