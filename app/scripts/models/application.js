App.Application = DS.Model.extend({
  name: DS.attr('string', {defaultValue: 'newApp'}),
  menu: DS.belongsTo('menu'),
  viewControllers: DS.hasMany('viewController', {inverse: 'application'}),

  deleteRecord: function () {
    this.get('viewControllers').forEach( function (viewController) {
      Ember.run.once(this, function () {
        viewController.deleteRecord();
        viewController.save();
      });
    });

    this._super();
  },

  toXml: function() {
    var self = this;
    var promise = new Promise(function(resolve, reject) {
      var xmlDocType = document.implementation.createDocumentType('appModel', 'MODEL', '<?xml version="1.0" encoding="ASCII"?>');
      var xmlDoc = document.implementation.createDocument('appModelXml', null, xmlDocType);

      var appModel = xmlDoc.createElement('metamodel:Application');
      appModel.setAttribute('xmi:version', '2.0');
      appModel.setAttribute('xmlns:xmi', 'http://www.omg.org/XMI');
      appModel.setAttribute('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance');
      appModel.setAttribute('xmlns:metamodel', 'http://metamodel/1.0');
      appModel.setAttribute('xsi:schemaLocation', 'http://metamodel/1.0 ../metamodel/metamodel.ecore');
      appModel.setAttribute('name', self.get('name'));
      appModel.setAttribute('companyIdentifier', 'it.polimi');

      var viewControllers = self.get('viewControllers');

      Promise.all(viewControllers.map(function(item) {
        return item.toXml(xmlDoc);
      })).then(function (values) {
        
        values.map(function (value) {
          appModel.appendChild(value);
        })
          
        
        appModel.appendChild(self.get('menu').toXml(xmlDoc));

        xmlDoc.appendChild(appModel);
        resolve(xmlDoc);
      });

      
    });

    return promise;
    
  }
});

/*App.Application.FIXTURES = [
  {
    id: 1,
    name: 'NewApp',
    menu: 1,
    device: 1,
    viewControllers: [1, 2]
  }
];*/