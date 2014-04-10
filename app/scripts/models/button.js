App.Button = DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string'),
  posX: DS.attr('number'),
  posY: DS.attr('number'),

  viewController: DS.belongsTo('viewController'),

  // Used to reload views
  didCreate: function() {
    var self = this;
    this.get('viewController.buttons').then(function (buttons) {
      buttons.pushObject(self);
    });
  }
});

App.Button.FIXTURES = [
  {id: 1, name: 'Button1', title: 'Button 1', posX: 0, posY: 0, viewController: 1},
  {id: 2, name: 'Button2', title: 'Button 2', posX: 10, posY: 10, viewController: 1}
];