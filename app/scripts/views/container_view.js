App.ContainerView = Ember.View.extend(App.UiDroppable, {
  tagName: 'div',
  classNames: ['control-container', 'expanded'],
  classNameBindings: ['controller.controllers.editor.device.platform'],
  templateName: 'views/container_view'

});