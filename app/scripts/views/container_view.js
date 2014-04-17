App.ContainerView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-container'],
  classNameBindings: ['controller.controllers.editor.platform'],
  templateName: 'views/container_view'

});