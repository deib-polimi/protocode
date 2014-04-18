App.ContainerView = Ember.View.extend(App.UiDroppable, {
  tagName: 'div',
  classNames: ['control-container', 'expanded'],
  classNameBindings: ['controller.controllers.editor.platform'],
  templateName: 'views/container_view'

});