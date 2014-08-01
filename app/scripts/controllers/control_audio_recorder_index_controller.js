App.ControlAudioRecorderIndexController = App.UiControlController.extend({
  allowedAudioPlayers: function () {
    return this.get('audioPlayers').filterBy('sourceType.type', 'hardwareFile');
  }.property('audioPlayers.@each'),

  /*allowedAudioPlayers: function () {
    return this.get('audioPlayers').filter(function (item) {
      console.log(item.get('sourceType.type'));
      return item.get('sourceType.type') === 'hardwareFile'
    });
  }.property('audioPlayers.@each')*/
  actions: {
    acceptChanges: function() {
      this._super();
      
      if (this.get('model.audioPlayer')) {
        this.get('model.audioPlayer').save();
      }
    }
  }
  
});