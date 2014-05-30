App.UiAudioPlayerView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-audio-player-view', 'expanded'],
  classNameBindings: ['controller.controllers.editor.device.platform'],
  templateName: 'views/ui_audio_player_view'
});