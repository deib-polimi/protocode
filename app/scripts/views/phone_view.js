App.PhoneView = Ember.View.extend({
  tagName: 'div',
  attributeBindings: ['style'],
  classNames: ['device-view'],
  classNameBindings: ['platform', 'deviceModel'],
  templateName: 'views/phone_view',

  platform: function () {
    return this.get('controller.controllers.editor.platform');
  }.property('controller.controllers.editor.platform'),
  
  deviceModel: function() {
    return this.get('controller.controllers.editor.deviceModel');
  }.property('controller.controllers.editor.deviceModel'),

  zoomLevelStyle: function() {
    var zoomLevel = this.get('context.zoomLevel');
    return 'transform: scale(' + zoomLevel + ', '  + zoomLevel + ');';
  }.property('context.zoomLevel'),

  style: function() {
    return this.get('zoomLevelStyle');
  }.property('zoomLevelStyle')
});