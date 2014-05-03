App.UiControl = DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string'),
  posX: DS.attr('number'),
  posY: DS.attr('number'),
  alignParentTop: DS.attr('boolean'),
  alignParentBottom: DS.attr('boolean'),
  alignParentStart: DS.attr('boolean'),
  alignParentEnd: DS.attr('boolean'),
  width: DS.attr('number'),
  height: DS.attr('number'),

  viewController: DS.belongsTo('viewController'),
  parentContainer: DS.belongsTo('container', {inverse: 'uiControls'}),

  alignTop: DS.belongsTo('uiControl', {polymorphic: true, inverse: 'revAlignTop'}),
  revAlignTop: DS.hasMany('uiControl', {polymorphic: true, inverse: 'alignTop'}),

  alignBottom: DS.belongsTo('uiControl', {polymorphic: true, inverse: 'revAlignBottom'}),
  revAlignBottom: DS.hasMany('uiControl', {polymorphic: true, inverse: 'alignBottom'}),

  alignStart: DS.belongsTo('uiControl', {polymorphic: true, inverse: 'revAlignStart'}),
  revAlignStart: DS.hasMany('uiControl', {polymorphic: true, inverse: 'alignStart'}),

  alignEnd: DS.belongsTo('uiControl', {polymorphic: true, inverse: 'revAlignEnd'}),
  revAlignEnd: DS.hasMany('uiControl', {polymorphic: true, inverse: 'alignEnd'}),


  above: DS.belongsTo('uiControl', {polymorphic: true, inverse: 'revAbove'}),
  revAbove: DS.hasMany('uiControl', {polymorphic: true, inverse: 'above'}),

  below: DS.belongsTo('uiControl', {polymorphic: true, inverse: 'revBelow'}),
  revBelow: DS.hasMany('uiControl', {polymorphic: true, inverse: 'below'}),

  toStartOf: DS.belongsTo('uiControl', {polymorphic: true, inverse: 'revToStartOf'}),
  revToStartOf: DS.hasMany('uiControl', {polymorphic: true, inverse: 'toStartOf'}),

  toEndOf: DS.belongsTo('uiControl', {polymorphic: true, inverse: 'revToEndOf'}),
  revToEndOf: DS.hasMany('uiControl', {polymorphic: true, inverse: 'toEndOf'}),

  sameLevelControls: function() {
    var parentContainer = this.get('parentContainer');

    if (parentContainer != null) {
      return parentContainer.get('uiControls');
    }
    
    return this.get('viewController.uiControls');
  }.property(
    'parentContainer.uiControls.@each',
    'viewController.uiControls.@each'),

  siblings: function() {
    return this.get('sameLevelControls').without(this);
  }.property('sameLevelControls'),

  top: function() {
    if (this.get('alignTop')) {
      return this.get('alignTop.top');
    }
    else if (this.get('below')) {
      return this.get('below.bottom');
    }
    else if (this.get('alignParentTop')) {
      return 0;
    }
    else if (this.get('alignBottom')) {
      return this.get('alignBottom.bottom') - this.get('height');
    }
    else if (this.get('alignParentBottom')) {

      if (this.get('parentContainer') != null) {
        return this.get('bottom') - this.get('height');
      }
      else {
        return this.get('bottom') - this.get('height');
      }

    }
    else if (this.get('above')) {
      return this.get('bottom') - this.get('height');
    }
    else {
      return this.get('posY');
    }
  }.property(
    'posY',
    'height',
    'alignTop.top',
    'alignParentTop',
    'alignBottom.bottom',
    'alignParentBottom',
    'below.bottom',
    'above',
    'bottom'),

  bottom: function() {
    if (this.get('alignBottom')) {
      return this.get('alignBottom.bottom');
    }
    else if (this.get('alignParentBottom')) {

      if (this.get('parentContainer') != null) {
        return this.get('parentContainer.height');
      }
      else {
        // Check tab bar for menu in iOS
        if (this.get('viewController.application.device.platform') == 'ios' &&
          this.get('viewController.application.menu.menuItems.length') > 0) {
          return this.get('viewController.application.device.screenHeight') - 49;
        }

        return this.get('viewController.application.device.screenHeight');
      }
      
    }
    else if (this.get('above')) {
      return this.get('above.top');
    }
    else {
      return this.get('top') + parseFloat(this.get('height'));
    }
  }.property(
    'alignBottom.bottom',
    'alignParentBottom',
    'top',
    'height',
    'parentContainer.height',
    'above.top',
    'viewController.application.device.screenHeight'),

  start: function() {
    if (this.get('alignStart')) {
      return this.get('alignStart.start');
    }
    else if (this.get('toEndOf')) {
      return this.get('toEndOf.end');
    }
    else if (this.get('alignParentStart')) {
      return 0;
    }
    else if (this.get('alignEnd')) {
      return this.get('alignEnd.end') - this.get('width');
    }
    else if (this.get('alignParentEnd')) {

      if (this.get('parentContainer') != null) {
        return this.get('parentContainer.width') - this.get('width');
      }
      else {
        return this.get('viewController.application.device.screenWidth') - this.get('width');
      }

    }
    else if (this.get('toStartOf')) {
      return this.get('end') - this.get('width');
    }
    else {
      return this.get('posX');
    }
  }.property(
    'posX',
    'width',
    'parentContainer',
    'alignStart.start',
    'toEndOf.end',
    'alignEnd.end',
    'alignParentStart',
    'alignParentEnd',
    'toStartOf',
    'end',
    'viewController.application.device.screenWidth'),

  end: function() {
    if (this.get('alignEnd')) {
      return this.get('alignEnd.end');
    }
    else if (this.get('alignParentEnd')) {

      if (this.get('parentContainer') != null) {
        return this.get('parentContainer.width');
      }
      else {
        return this.get('viewController.application.device.screenWidth');
      }

    }
    else if (this.get('toStartOf')) {
      return this.get('toStartOf.start');
    }
    else {
      return this.get('start') + parseFloat(this.get('width'));
    }
  }.property(
    'alignEnd',
    'alignParentEnd',
    'start',
    'parentContainer',
    'toStartOf.start',
    'width',
    'viewController.application.device.screenWidth'),

  computedWidth: function() {
    return this.get('end') - this.get('start');
  }.property(
    'start',
    'end'),

  computedHeight: function() {
    return this.get('bottom') - this.get('top');
  }.property(
    'top',
    'bottom'),

  // Used to reload views
  didCreate: function() {
    var self = this;
    if (!this.get('parentContainer')) {
      this.get('viewController.uiControls').then(function (uiControls) {
        uiControls.pushObject(self);
      });
    }
    else {
      this.get('parentContainer.uiControls').then(function (uiControls) {
        uiControls.pushObject(self);
      });
    }
  }
});