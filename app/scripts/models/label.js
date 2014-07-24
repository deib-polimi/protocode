App.Label = App.UiControl.extend({
  name:     DS.attr('string', {defaultValue: 'DummyLabel'}),
  title:    DS.attr('string', {defaultValue: 'Dummy Label'}),

  textAlign: DS.attr('string', {defaultValue: 'left'}),

  width:    DS.attr('number', {defaultValue: 125}),
  height:   DS.attr('number', {defaultValue: 30}),

  xmlName:  'textViews',

  toXml: function(xmlDoc) {
    var label = xmlDoc.createElement(this.get('xmlName'));
    this.decorateXml(label);
    label.setAttribute('content', this.get('title'));
    label.setAttribute('textAlign', this.get('textAlign'));
    return label;
  }
});
/*
App.Label.FIXTURES = [
  {
    id: 3,
    name: 'Label1',
    title: 'Label 1',
    posX: 30,
    posY: 250,
    paddingTop: 8,
    paddingBottom: 8,
    paddingStart: 8,
    paddingEnd: 8,
    marginTop: 0,
    marginBottom: 0,
    marginStart: 0,
    marginEnd: 0,
    alignParentTop: false,
    alignParentBottom: false,
    alignParentStart: false,
    alignParentEnd: false,
    width: 90,
    height: 30,
    viewController: 1,
    parentContainer: null
  }
];*/