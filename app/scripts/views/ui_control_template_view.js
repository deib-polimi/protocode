App.UiControlTemplateView = Ember.View.extend({
  tagName: 'div',
  classNames: ['img-thumbnail', 'control-ui-picker'],
  attributeBindings: ['draggable', 'alt', 'style' ],  
  draggable: "true",

  alt: function () {
    return this.get('context.label');
  }.property('context.label'),
  
  style: function() {
    return 'background-image: url("' + this.get('context.imageSource') + '");';
  }.property('context.imageSource'),


  dragStart: function(event) {
    event.dataTransfer.setData('uiControlType', this.get('context.type'));
  }
});