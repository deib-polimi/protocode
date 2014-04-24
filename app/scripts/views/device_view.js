App.DeviceView = Ember.View.extend({
  tagName: 'div',
  attributeBindings: ['style'],
  classNames: ['device-view'],
  classNameBindings: ['platform', 'deviceModel'],
  templateName: 'views/device_view',

  platform: function () {
    return this.get('controller.controllers.editor.device.platform');
  }.property('controller.controllers.editor.device'),
  
  deviceModel: function() {
    return this.get('controller.controllers.editor.device.name');
  }.property('controller.controllers.editor.device'),

  zoomLevelStyle: function() {
    var zoomLevel = this.get('context.zoomLevel');
    return 'transform: scale(' + zoomLevel + ', '  + zoomLevel + ');' +
      '-webkit-transform: scale(' + zoomLevel + ', '  + zoomLevel + ');';
  }.property('context.zoomLevel'),

  style: function() {
    return this.get('zoomLevelStyle');
  }.property('zoomLevelStyle')
});