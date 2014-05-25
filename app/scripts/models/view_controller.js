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
    uiControls: [
      {id: 1, type: 'button'},
      {id: 2, type: 'button'},
      {id: 3, type: 'label'},
      {id: 4, type: 'editText'},
      {id: 5, type: 'webView'},
      {id: 6, type: 'imageView'},
      {id: 7, type: 'videoView'}
    ],
    application: 1
  },
	{
    id: 2,
    name: 'SecondView',
    application: 1
  }
];