App.UiControl = DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string'),
  posX: DS.attr('number'),
  posY: DS.attr('number'),
  alignParentTop: DS.attr('boolean'),
  alignParentBottom: DS.attr('boolean'),
  alignParentStart: DS.attr('boolean'),
  alignParentEnd: DS.attr('boolean'),

  viewController: DS.belongsTo('viewController'),

  // Used to reload views
  didCreate: function() {
    var self = this;
    this.get('viewController.uiControls').then(function (uiControls) {
      uiControls.pushObject(self);
    });
  }
});