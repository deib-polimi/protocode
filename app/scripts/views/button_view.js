App.ButtonView = Ember.View.extend(App.UiMoveable, {
  tagName: 'div',
  classNames: ['control-button'],
  classNameBindings: ['controller.controllers.editor.platform'],
  templateName: 'views/button_view',
  attributeBindings: ['style'],

  style: function() {
    return this.get('positionStyle');
  }.property('positionStyle')

});