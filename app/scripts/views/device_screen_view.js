App.DeviceScreenView = Ember.View.extend({
  tagName: 'div',
  attributeBindings: ['style'],
  classNames: ['device-screen-view'],

  dragOver: function(event) {
    event.preventDefault();
  },

  drop: function(event) {
    event.preventDefault();
    alert(event.dataTransfer.getData('uiControlType'));
  }

});