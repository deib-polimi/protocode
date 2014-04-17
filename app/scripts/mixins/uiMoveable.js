App.UiMoveable = Ember.Mixin.create({
  isMoving: false,
  classNameBindings: ['isMoving'],
  
  mouseMove: function(event) {
    if (this.get('isMoving')) {
      var element = this.get('element');
      var parentOffset = $(this.get('parentView.element')).offset();
      this.set('context.posX', (event.pageX - parentOffset.left - element.offsetWidth / 2) / this.get('controller.zoomLevel'));
      this.set('context.posY', (event.pageY - parentOffset.top - element.offsetHeight / 2) / this.get('controller.zoomLevel'));
    }
  },

  mouseDown: function(event) {
    event.preventDefault();
    this.set('isMoving', true);
  },

  mouseUp: function(event) {
    event.preventDefault();
    this.set('isMoving', false);
  },

  positionStyleX: function() {
    return 'left: ' + this.get('context.posX') + 'px;';
  }.property('context.posX'),

  positionStyleY: function() {
    return 'top: ' + this.get('context.posY') + 'px;';
  }.property('context.posY'),

  // Not to use
  positionStyle: function() {
    return 'top: ' + this.get('context.posY') + 'px; left: ' + this.get('context.posX') + 'px;';
  }.property('context.posX', 'context.posY')
});