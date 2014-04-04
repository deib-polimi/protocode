App.PhoneView = Ember.View.extend({
  tagName: 'div',
  classNames: ['device-view'],
  classNameBindings: ['platform', 'deviceModel'],
  templateName: 'views/phone_view',

  platform: function () {
    return this.get('controller.controllers.editor.platform');
  }.property('controller.controllers.editor.platform'),
  
  deviceModel: function() {
    return this.get('controller.controllers.editor.deviceModel');
  }.property('controller.controllers.editor.deviceModel')
});