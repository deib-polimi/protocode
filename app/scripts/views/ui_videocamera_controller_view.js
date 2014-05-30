App.UiVideocameraControllerView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-videocamera-controller-view', 'expanded'],
  classNameBindings: ['controller.controllers.editor.device.platform'],
  templateName: 'views/ui_videocamera_controller_view'
});