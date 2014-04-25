var attr = DS.attr;

App.ViewController = DS.Model.extend({
	name: attr('string'),
  uiControls: DS.hasMany('uiControl', {async: true, polymorphic: true}),
  application: DS.belongsTo('application')
});

App.ViewController.FIXTURES = [
	{
    id: 1,
    name: 'MainView',
    uiControls: [{id: 1, type: 'button'}, {id: 2, type: 'button'}],
    application: 1
  },
	{
    id: 2,
    name: 'SecondView',
    application: 1
  }
];