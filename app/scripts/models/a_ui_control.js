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
      return 0;
    }
    else if (this.get('alignParentBottom')) {
      return null;
    }
    else {
      return this.get('posY');
    }
  }.property(
    'posY',
    'alignTop.top',
    'alignParentTop',
    'alignParentBottom'),

  start: function() {
    if (this.get('alignStart')) {
      return this.get('alignStart.start');
    }
    else if (this.get('alignParentStart')) {
      return 0;
    }
    else if (this.get('alignParentEnd')) {
      return null;
    }
    else {
      return this.get('posX');
    }
  }.property(
    'posX',
    'alignStart.start',
    'alignParentStart',
    'alignParentEnd'),

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