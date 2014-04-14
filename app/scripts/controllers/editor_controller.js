App.EditorController = Ember.ObjectController.extend({
  platform: function() {
    return this.get('deviceModel.platform');
  }.property('deviceModel'),

  deviceModel: function() {
    return this.get('devices').findBy('id', this.get('deviceId'));
  }.property('deviceId')
});