App.Application = DS.Model.extend({
  name: DS.attr('string', {defaultValue: 'newApp'}),
  device: DS.belongsTo('device'),
  menu: DS.belongsTo('menu'),
  viewControllers: DS.hasMany('viewController', {inverse: 'application'}),

  toXml: function() {
    var xmlDocType = document.implementation.createDocumentType('appModel', 'MODEL', '<?xml version="1.0" encoding="ASCII"?>');
    var xmlDoc = document.implementation.createDocument('appModelXml', null, xmlDocType);

    var appModel = xmlDoc.createElement('metamodel:Application');
    appModel.setAttribute('xmi:version', '2.0');
    appModel.setAttribute('xmlns:xmi', 'http://www.omg.org/XMI');
    appModel.setAttribute('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance');
    appModel.setAttribute('xmlns:metamodel', 'http://metamodel/1.0');
    appModel.setAttribute('xsi:schemaLocation', 'http://metamodel/1.0 ../metamodel/metamodel.ecore');
    appModel.setAttribute('name', this.get('name'));
    appModel.setAttribute('companyIdentifier', 'it.polimi');

    var viewControllers = this.get('viewControllers');

    viewControllers.map(function(item) {
      appModel.appendChild(item.toXml(xmlDoc));
    });

    appModel.appendChild(this.get('menu').toXml(xmlDoc));

    xmlDoc.appendChild(appModel);
    return xmlDoc;
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