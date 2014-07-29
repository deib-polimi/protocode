App.UiVideocameraControllerView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-videocamera-controller-view', 'control-button', 'expanded'],
  classNameBindings: ['controller.controllers.editor.device.platform'],
  templateName: 'views/ui_videocamera_controller_view'
});