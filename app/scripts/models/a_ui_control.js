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

  belowTo: DS.belongsTo('uiControl', {polymorphic: true, inverse: 'revBelowTo'}),
  revBelowTo: DS.hasMany('uiControl', {polymorphic: true, inverse: 'belowTo'}),

  alignStart: DS.belongsTo('uiControl', {polymorphic: true, inverse: 'revAlignStart'}),
  revAlignStart: DS.hasMany('uiControl', {polymorphic: true, inverse: 'alignStart'}),

  alignEnd: DS.belongsTo('uiControl', {polymorphic: true, inverse: 'revAlignEnd'}),
  revAlignEnd: DS.hasMany('uiControl', {polymorphic: true, inverse: 'alignEnd'}),

  siblings: function() {
    var parentContainer = this.get('parentContainer');

    if (parentContainer != null) {
      return parentContainer.get('uiControls');
    }

    return this.get('viewController.uiControls');
  }.property('parentContainer'),

  top: function() {
    if (this.get('alignTop')) {
      return this.get('alignTop.top');
    }
    else if (this.get('alignParentTop')) {
      return 0;
    }
    else if (this.get('alignBottom')) {
      return this.get('alignBottom.bottom') - this.get('height');
    }
    else if (this.get('alignParentBottom')) {

      if (this.get('parentContainer') != null) {
        return this.get('parentContainer.height') - this.get('height');
      }
      else {
        return this.get('viewController.application.device.screenHeight') - this.get('height');
      }

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
    'parentContainer.height'),

  bottom: function() {
    if (this.get('alignBottom')) {
      return this.get('alignBottom.bottom');
    }
    else if (this.get('alignParentBottom')) {

      if (this.get('parentContainer') != null) {
        return this.get('parentContainer.height');
      }
      else {
        return this.get('viewController.application.device.screenHeight');
      }
      
    }
    else {
      return this.get('top') + this.get('height');
    }
  }.property(
    'alignBottom.bottom',
    'alignParentBottom',
    'top',
    'height',
    'parentContainer.height'),

  start: function() {
    if (this.get('alignStart')) {
      return this.get('alignStart.start');
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
    else {
      return this.get('posX');
    }
  }.property(
    'posX',
    'width',
    'parentContainer',
    'alignStart.start',
    'alignEnd.end',
    'alignParentStart',
    'alignParentEnd'),

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
    else {
      return this.get('start') + this.get('width');
    }
  }.property(
    'alignEnd',
    'alignParentEnd',
    'start',
    'parentContainer',
    'width'),

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