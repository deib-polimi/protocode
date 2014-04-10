App.DeviceScreenView = Ember.View.extend({
  tagName: 'div',
  attributeBindings: ['style'],
  classNames: ['device-screen-view'],
  templateName: 'views/device_screen_view',

  dragOver: function(event) {
    event.preventDefault();
  },

  drop: function(event) {
    event.preventDefault();
    alert(event.dataTransfer.getData('uiControlType'));
    this.get('controller').send('addUiControl', event.dataTransfer.getData('uiControlType'));
  }

});