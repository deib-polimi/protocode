App.UiAudioRecorderView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-audio-recorder-view', 'control-button', 'expanded'],
  classNameBindings: ['controller.controllers.editor.device.platform'],
  templateName: 'views/ui_audio_recorder_view'
});