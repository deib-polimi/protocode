App.UiPhotocameraControllerView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-photocamera-controller-view', 'expanded'],
  classNameBindings: ['controller.controllers.editor.device.platform'],
  templateName: 'views/ui_photocamera_controller_view'
});