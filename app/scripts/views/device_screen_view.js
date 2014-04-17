App.DeviceScreenView = Ember.View.extend(App.UiDroppable, {
  tagName: 'div',
  attributeBindings: ['style'],
  classNames: ['device-screen-view'],
  templateName: 'views/device_screen_view'

});