App.UiWebViewView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-web-view', 'expanded'],
  classNameBindings: ['controller.controllers.editor.device.platform'],
  templateName: 'views/ui_web_view_view'
});