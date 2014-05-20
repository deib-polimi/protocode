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
    return this.computeVerticalAxis(this.get('context.top'));
  }.property('context.top', 'device'),

  bottom: function() {
    return this.computeVerticalAxis(this.get('context.bottom'));
  }.property('context.bottom', 'device'),

  start: function() {
    return this.computeHorizontalAxis(this.get('context.start'));
  }.property('context.start', 'device'),

  end: function() {
    return this.computeHorizontalAxis(this.get('context.end'));
  }.property('context.end', 'device'),

  /**** Margin ****/
  marginTop: function() {
    return this.computeVerticalAxis(this.get('context.marginTop'));
  }.property('context.marginTop', 'device'),

  marginBottom: function() {
    return this.computeVerticalAxis(this.get('context.marginBottom'));
  }.property('context.marginBottom', 'device'),

  marginStart: function() {
    return this.computeHorizontalAxis(this.get('context.marginStart'));
  }.property('context.marginStart', 'device'),

  marginEnd: function() {
    return this.computeHorizontalAxis(this.get('context.marginEnd'));
  }.property('context.marginEnd', 'device'),

  /**** Padding ****/
  paddingTop: function() {
    return this.computeVerticalAxis(this.get('context.paddingTop'));
  }.property('context.paddingTop', 'device'),

  paddingBottom: function() {
    return this.computeVerticalAxis(this.get('context.paddingBottom'));
  }.property('context.paddingBottom', 'device'),

  paddingStart: function() {
    return this.computeHorizontalAxis(this.get('context.paddingStart'));
  }.property('context.paddingStart', 'device'),

  paddingEnd: function() {
    return this.computeHorizontalAxis(this.get('context.paddingEnd'));
  }.property('context.paddingEnd', 'device'),

  computedWidth: function() {
    return this.computeHorizontalAxis(this.get('context.computedWidth'));
  }.property('context.computedWidth', 'device'),

  computedHeight: function() {
    return this.computeVerticalAxis(this.get('context.computedHeight'));
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

    result += 'top: ' + this.get('top') + 'px; ';    
    result += 'left: ' + this.get('start') + 'px; ';
    result += 'height: ' + this.get('computedHeight') + 'px;';
    result += 'width: ' + this.get('computedWidth') + 'px;';

    result += 'margin-top: ' + this.get('marginTop') + 'px;';
    result += 'margin-bottom: ' + this.get('marginBottom') + 'px;';
    result += 'margin-left: ' + this.get('marginStart') + 'px;';
    result += 'margin-right: ' + this.get('marginEnd') + 'px;';

    result += 'padding-top: ' + this.get('paddingTop') + 'px;';
    result += 'padding-bottom: ' + this.get('paddingBottom') + 'px;';
    result += 'padding-left: ' + this.get('paddingStart') + 'px;';
    result += 'padding-right: ' + this.get('paddingEnd') + 'px;';

    return result;
  }.property(
    'start',
    'top',
    'computedWidth',
    'computedHeight',
    'marginTop',
    'marginBottom',
    'marginStart',
    'marginEnd',
    'paddingTop',
    'paddingBottom',
    'paddingStart',
    'paddingEnd'
    ),

  computeVerticalAxis: function(value) {
    return value / this.get('device.screenHeight') * this.get('device.cssHeight');
  },

  computeHorizontalAxis: function(value) {
    return value / this.get('device.screenWidth') * this.get('device.cssWidth');
  }

});