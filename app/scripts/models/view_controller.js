var attr = DS.attr;

App.ViewController = DS.Model.extend({
	name:            attr('string'),
  launcher:         attr('boolean', {defaultValue: false}),
  uiControls:       DS.hasMany('uiControl', {polymorphic: true, async: true}),
  application:      DS.belongsTo('application', {inverse: 'viewControllers'}),

  alertDialogs:     DS.hasMany('alertDialog', {inverse: 'viewController'}),
  progressDialogs:  DS.hasMany('progressDialog', {inverse: 'viewController'}),

  asyncTasks:       DS.hasMany('asyncTask', {inverse: 'viewController'}),

  xmlName:        'viewControllers',

  deleteRecord: function () {
    var self = this;

    this.get('uiControls').then(function (uiControls) {
      uiControls.forEach(function (uiControl) {
        Ember.run.once(self, function () {
          uiControl.deleteRecord();
          uiControl.save();
        });
      });
    });

    var linkedModels = ['alertDialogs', 'progressDialogs', 'asyncTasks'];

    var self = this

    linkedModels.forEach(function (linkedModel) {
      self.get(linkedModel).forEach(function (uiControl) {
        Ember.run.once(self, function () {
          uiControl.deleteRecord();
          uiControl.save();
        });
      });
    });

    this._super();
  },

  toXml: function(xmlDoc) {
    var self = this;
    
    var promise = new Promise(function (resolve, reject) {
      var viewController = xmlDoc.createElement(self.get('xmlName'));
      viewController.setAttribute('name', self.get('name'));
      viewController.setAttribute('launcher', self.get('launcher'));

      self.get('alertDialogs').map(function (alertDialog) {
        viewController.appendChild(alertDialog.toXml(xmlDoc));
      });

      self.get('progressDialogs').map(function (progressDialog) {
        viewController.appendChild(progressDialog.toXml(xmlDoc));
      });

      self.get('asyncTasks').map(function (asyncTask) {
        viewController.appendChild(asyncTask.toXml(xmlDoc));
      });

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
  },

  getRefPath: function(path) {
    return '//@' + this.get('xmlName') + '[name=\'' + this.get('name') + '\']' + path;
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