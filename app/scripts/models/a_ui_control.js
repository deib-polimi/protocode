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