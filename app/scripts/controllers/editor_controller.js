App.EditorController = Ember.ObjectController.extend({
  platform: 'ios',
  deviceModel: 'iPhone5s',

  platforms: function() {
    return this.store.find('platform');
  }.property(),

  devices: function() {

  }.property('platforms'),
  
  actions: {
  }
});