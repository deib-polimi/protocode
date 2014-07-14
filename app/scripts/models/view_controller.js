var attr = DS.attr;

App.ViewController = DS.Model.extend({
	name: attr('string'),
  launcher: attr('boolean'),
  uiControls: DS.hasMany('uiControl', {polymorphic: true, async: true}),
  application: DS.belongsTo('application', {inverse: 'viewControllers'}),

  toXml: function(xmlDoc) {
    var viewController = xmlDoc.createElement('viewControllers');
    viewController.setAttribute('name', this.get('name'));
    viewController.setAttribute('launcher', this.get('launcher'));

    this.get('uiControls').map(function (uiControl) {
      viewController.appendChild(uiControl.toXml(xmlDoc));
    });
    
    return viewController;
  }
});

/*
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
    uiControls: [
      {id: 8, type: 'listView'},
      {id: 9, type: 'gridView'}
    ],
    application: 1
  }
];*/