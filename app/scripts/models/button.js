App.Button = App.UiControl.extend({
  title:          DS.attr('string', {defaultValue: 'DummyButtonName'}),
  clickListener:  DS.belongsTo('clickListener'),

  width:          DS.attr('number', {defaultValue: 125}),
  height:         DS.attr('number', {defaultValue: 30}),

  xmlName:        'buttons',

  deleteRecord: function () {
    var clickListener = this.get('clickListener');

    if (clickListener) {
      clickListener.deleteRecord();
      clickListener.save();
    }

    this._super();
  },

  toXml: function(xmlDoc) {
    var button = xmlDoc.createElement(this.get('xmlName'));
    this.decorateXml(button);
    button.setAttribute('title', this.get('title'));

    var clickListener = this.get('clickListener');

    if (clickListener != null) {
        button.appendChild(clickListener.toXml(xmlDoc));
    }
    
    return button;
  }
});
/*
App.Button.FIXTURES = [
  {
    id: 1,
    name: 'Button1',
    title: 'Button 1',
    posX: 0,
    posY: 100,
    paddingTop: 0,
    paddingBottom: 0,
    paddingStart: 0,
    paddingEnd: 0,
    marginTop: 8,
    marginBottom: 8,
    marginStart: 8,
    marginEnd: 8,
    alignParentTop: true,
    alignParentBottom: false,
    alignParentStart: false,
    alignParentEnd: false,
    width: 90,
    height: 30,
    viewController: 1,
    parentContainer: null,
    clickListener: null
  },
  {
    id: 2,
    name: 'Button2',
    title: 'Button 2',
    posX: 200,
    posY: 90,
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
    width: 100,
    height: 50,
    viewController: 1,
    parentContainer: null,
    clickListener: null
  }
];*/