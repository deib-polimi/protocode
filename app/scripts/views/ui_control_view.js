App.UiControlView = Ember.View.extend(App.UiMoveable, {
  templateName: 'views/ui_control_view',
  classNames: ['ui-control'],
  classNameBindings: [
    'active'
    /*'alignParentTop',
    'alignParentBottom',
    'alignParentStart',
    'alignParentEnd'*/],
  attributeBindings: ['style'],

  device: Ember.computed.alias('controller.controllers.editor.device'),

  alignParentTop: function() {
    return this.get('context.alignParentTop');
  }.property('context.alignParentTop'), 

  alignParentBottom: function() {
    return this.get('context.alignParentBottom');
  }.property('context.alignParentBottom'), 

  alignParentStart: function() {
    return this.get('context.alignParentStart');
  }.property('context.alignParentStart'), 

  alignParentEnd: function() {
    return this.get('context.alignParentEnd');
  }.property('context.alignParentEnd'), 

  top: function() {
    return this.get('context.top') / this.get('device.screenHeight') * this.get('device.cssHeight');
  }.property('context.top', 'device'),

  bottom: function() {
    return this.get('context.bottom') / this.get('device.screenHeight') * this.get('device.cssHeight');
  }.property('context.bottom', 'device'),

  start: function() {
    return this.get('context.start') / this.get('device.screenWidth') * this.get('device.cssWidth');
  }.property('context.start', 'device'),

  end: function() {
    return this.get('context.end') / this.get('device.screenWidth') * this.get('device.cssWidth');
  }.property('context.end', 'device'),

  computedWidth: function() {
    return this.get('context.computedWidth') / this.get('device.screenWidth') * this.get('device.cssWidth');
  }.property('context.computedWidth', 'device'),

  computedHeight: function() {
    return this.get('context.computedHeight') / this.get('device.screenHeight') * this.get('device.cssHeight');
  }.property('context.computedHeight', 'device'),

  uiControlType: function () {
    var controlType = this.get('context').constructor.toString();
    console.log('Choose view for: ' + controlType);

    switch (controlType) {
      case ('App.Button'):
        return App.ButtonView;
        break;

      case ('App.Container'):
        return App.ContainerView;
        break;
    }
  }.property(),

  style: function() {
    var result = '';
    /*
    if (!this.get('alignParentTop') && !this.get('alignParentBottom')) {
      result += this.get('posYStyle');
    }
    if (!this.get('alignParentStart') && !this.get('alignParentEnd')) {
      result += this.get('posXStyle');
    }
    */

    result += 'top: ' + this.get('top') + 'px; ';    
    result += 'left: ' + this.get('start') + 'px; ';
    result += 'height: ' + this.get('computedHeight') + 'px;';
    result += 'width: ' + this.get('computedWidth') + 'px;';
    
    /*
    if (!this.get('alignParentTop') || !this.get('alignParentBottom')) {
      
      result += 'height: ' + this.get('context.height') + 'px;';
    }

    if (!this.get('alignParentStart') || !this.get('alignParentEnd')) {
      result += 'width: ' + this.get('context.width') + 'px;';
    } */

    return result;
  }.property(
    'context.start',
    'context.top',
    'context.alignParentTop',
    'context.alignParentBottom',
    'context.alignParentStart',
    'context.alignParentEnd',
    'context.width',
    'context.height')





});