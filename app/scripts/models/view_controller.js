var attr = DS.attr;

App.ViewController = DS.Model.extend({
	name: attr('string')
});

App.ViewController.FIXTURES = [
	{id: 1, name: 'MainView'},
	{id: 2, name: 'SecondView'}
];