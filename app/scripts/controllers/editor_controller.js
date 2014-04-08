App.EditorController = Ember.ObjectController.extend({
  platform: function() {
    if (this.get('devices')) {
      return this.get('devices').findBy('id', this.get('deviceId')).get('platform.name');
    }
  }.property('deviceId'),

  deviceModel: function() {
    if (this.get('devices')) {
      return this.get('devices').findBy('id', this.get('deviceId')).get('name');
    }
  }.property('deviceId'),

  devices: null,
  
  actions: {
  }
});