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

  alignTop: DS.belongsTo('uiControl', {inverse: 'revAlignTop'}),
  revAlignTop: DS.hasMany('uiControl', {inverse: 'alignTop'}),

  belowTo: DS.belongsTo('uiControl', {inverse: 'revBelowTo'}),
  revBelowTo: DS.hasMany('uiControl', {inverse: 'belowTo'}),

  alignStart: DS.belongsTo('uiControl', {inverse: 'revAlignStart'}),
  revAlignStart: DS.hasMany('uiControl', {inverse: 'alignStart'}),

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

      if (this.get('parentContainer') != null) {
        return this.get('parentContainer.top');
      }
      else {
        return 0;
      }

    }
    else if (this.get('alignParentBottom')) {

      if (this.get('parentContainer') != null) {
        return this.get('parentContainer.bottom') - this.get('height');
      }
      else {
        return this.get('parentContainer.application.device.screenHeight') - this.get('height');
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
    'alignParentBottom',
    'parentContainer'),

  bottom: function() {
    if (this.get('alignBottom')) {
      return this.get('alignBottom.bottom');
    }
    else if (this.get('alignParentBottom')) {

      if (this.get('parentContainer') != null) {
        return this.get('parentContainer.bottom');
      }
      else {
        return this.get('parentContainer.application.device.screenHeight');
      }
      
    }
    else {
      return this.get('top') + this.get('height');
    }
  }.property(
    'alignBottom',
    'alignParentBottom',
    'top',
    'height',
    'parentContainer'),

  start: function() {
    if (this.get('alignStart')) {
      return this.get('alignStart.start');
    }
    else if (this.get('alignParentStart')) {
      return 0;
    }
    else if (this.get('alignParentEnd')) {
      return this.get('parentContainer.application.device.screenWidth') - this.get('width');
    }
    else {
      return this.get('posX');
    }
  }.property(
    'posX',
    'width',
    'alignStart.start',
    'alignParentStart',
    'alignParentEnd'),

  end: function() {
    if (this.get('alignEnd')) {
      return this.get('alignEnd.end');
    }
    else if (this.get('alignParentEnd')) {
      return this.get('parentContainer.application.device.screenWidth');
    }
    else {
      return this.get('start') + this.get('width');
    }
  }.property(
    'alignEnd',
    'alignParentEnd',
    'start',
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