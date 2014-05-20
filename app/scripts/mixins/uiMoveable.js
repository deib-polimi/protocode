App.UiMoveable = Ember.Mixin.create({
  isMoving: false,
  classNameBindings: ['isMoving'],

  offsetMouseX: 0,
  offsetMouseY: 0,
  
  mouseMove: function(event) {
    if (this.get('isMoving')) {
      var element = this.get('element');
      var parentOffset = $(this.get('parentView.element')).offset();
      this.set('context.posX', (event.pageX - parentOffset.left - this.get('offsetMouseX')) / this.get('controller.zoomLevel') * this.get('device.screenWidth') / this.get('device.cssWidth'));
      this.set('context.posY', (event.pageY - parentOffset.top - this.get('offsetMouseY')) / this.get('controller.zoomLevel') * this.get('device.screenHeight') / this.get('device.cssHeight') - this.get('device.viewTop'));
    }
  },

  mouseDown: function(event) {
    event.preventDefault();
    this.set('isMoving', true);

    var elementOffset = $(this.get('element')).offset();
    this.set('offsetMouseX', (event.pageX - elementOffset.left));
    this.set('offsetMouseY', (event.pageY - elementOffset.top));
    return false;
  },

  mouseUp: function(event) {
    event.preventDefault();
    this.set('isMoving', false);
  }
});