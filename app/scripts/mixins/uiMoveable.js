App.UiMoveable = Ember.Mixin.create({
  isMoving: false,
  classNameBindings: ['isMoving'],

  offsetMouseX: 0,
  offsetMouseY: 0,

  mouseDown: function(event) {
    event.preventDefault();
    this.set('isMoving', true);

    var elementOffset = $(this.get('element')).offset();
    this.set('offsetMouseX', (event.pageX - elementOffset.left));
    this.set('offsetMouseY', (event.pageY - elementOffset.top));

    var self = this;

    $('.device-screen-view').on('mousemove', function(event) {
      var element = self.get('element');
      var parentOffset = $(self.get('parentView.element')).offset();
      var posX = (event.pageX - parentOffset.left - self.get('offsetMouseX')) / self.get('controller.zoomLevel') * self.get('device.screenWidth') / self.get('device.cssWidth');
      var posY = (event.pageY - parentOffset.top - self.get('offsetMouseY')) / self.get('controller.zoomLevel') * self.get('device.screenHeight') / self.get('device.cssHeight');

      if (self.get('context.parentContainer') == null) {
        posY -= self.get('device.viewTop');
      }

      self.set('context.posX', posX);
      self.set('context.posY', posY);
    });

    return false;
  },

  mouseUp: function(event) {
    event.preventDefault();
    this.set('isMoving', false);
    this.get('context').save();
    $('.device-screen-view').off('mousemove');
  }
});