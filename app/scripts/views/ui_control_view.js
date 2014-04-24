App.UiControlView = Ember.View.extend(App.UiMoveable, {
  templateName: 'views/ui_control_view',
  classNames: ['ui-control'],
  classNameBindings: [
    'active',
    'alignParentTop',
    'alignParentBottom',
    'alignParentStart',
    'alignParentEnd'],
  attributeBindings: ['style'],

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

  bottom: function() {
    return this.get('top') + $(this.get('element')).outerHeight(true);
    // TODO: add padding and margin properties to trigger this
  }.property('top',
    'context.height'),

  end: function() {
    return this.get('start') + $(this.get('element')).outerWidth(true);
  }.property(
    'start',
    'context.width'),


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

    if (this.get('context.top') != null) {
      result += 'top: ' + this.get('context.top') + 'px; ';
    }

    if (this.get('context.start') != null) {
      result += 'left: ' + this.get('context.start') + 'px; ';
    }

    if (!this.get('alignParentTop') || !this.get('alignParentBottom')) {
      
      result += 'height: ' + this.get('context.height') + 'px;';
    }

    if (!this.get('alignParentStart') || !this.get('alignParentEnd')) {
      result += 'width: ' + this.get('context.width') + 'px;';
    }

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