App.UiMoveable = Ember.Mixin.create({
  isMoving: false,
  classNameBindings: ['isMoving'],

  offsetMouseX: 0,
  offsetMouseY: 0,
  
  mouseMove: function(event) {
    if (this.get('isMoving')) {
      var element = this.get('element');
      var parentOffset = $(this.get('parentView.element')).offset();
      var posX = (event.pageX - parentOffset.left - this.get('offsetMouseX')) / this.get('controller.zoomLevel') * this.get('device.screenWidth') / this.get('device.cssWidth');
      var posY = (event.pageY - parentOffset.top - this.get('offsetMouseY')) / this.get('controller.zoomLevel') * this.get('device.screenHeight') / this.get('device.cssHeight');

      if (this.get('context.parentContainer') == null) {
        posY -= this.get('device.viewTop');
      }

      this.set('context.posX', posX);
      this.set('context.posY', posY);
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