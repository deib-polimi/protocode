App.UiControlTemplateView = Ember.View.extend({
  tagName: 'img',
  classNames: ['img-thumbnail', 'control-ui-picker'],
  attributeBindings: ['draggable', 'alt', 'src' ],  
  draggable: "true",
  alt: function () {
    return this.get('context.label');
  }.property(),
  src: function() {
    return this.get('context.imageSource');
  }.property()
});