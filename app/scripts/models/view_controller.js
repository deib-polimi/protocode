var attr = DS.attr;

App.ViewController = DS.Model.extend({
	name: attr('string'),
  launcher: attr('boolean', {defaultValue: false}),
  uiControls: DS.hasMany('uiControl', {polymorphic: true, async: true}),
  application: DS.belongsTo('application', {inverse: 'viewControllers'}),

  toXml: function(xmlDoc) {
    var self = this;
    
    var promise = new Promise(function (resolve, reject) {
      var viewController = xmlDoc.createElement('viewControllers');
      viewController.setAttribute('name', self.get('name'));
      viewController.setAttribute('launcher', self.get('launcher'));

      self.get('uiControls').then(function (uiControls) {

        Promise.all(uiControls.map(function (uiControl) {
          return uiControl.toXml(xmlDoc);
        })).then(function (uiControlXmls) {
          
          uiControlXmls.map(function (xml) {
            viewController.appendChild(xml);
          });

          resolve(viewController);

        });  
      });
    });

    return promise;
    
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