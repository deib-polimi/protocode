var attr = DS.attr;

App.ViewController = DS.Model.extend({
	name: attr('string'),
  buttons: DS.hasMany('button', {async: true})
});

App.ViewController.FIXTURES = [
	{id: 1, name: 'MainView', buttons: [1, 2]},
	{id: 2, name: 'SecondView'}
];