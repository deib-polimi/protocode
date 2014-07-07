App.Application = DS.Model.extend({
  name: DS.attr('string', {defaultValue: 'newApp'}),
  device: DS.belongsTo('device'),
  menu: DS.belongsTo('menu'),
  viewControllers: DS.hasMany('viewController', {inverse: 'application'}),

  toXml: function() {
    var xmlDocType = document.implementation.createDocumentType('appModel', 'MODEL', '<?xml version="1.0" encoding="ASCII"?>');
    var xmlDoc = document.implementation.createDocument('appModelXml', null, xmlDocType);
    var elem = xmlDoc.createElement("metamodel:Application");
    xmlDoc.appendChild(elem);
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