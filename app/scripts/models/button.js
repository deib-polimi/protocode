App.Button = App.UiControl.extend({
  width: DS.attr('number', {defaultValue: 125}),
  height: DS.attr('number', {defaultValue: 30}),
  clickListener: DS.belongsTo('clickListener')
});

App.Button.FIXTURES = [
  {
    id: 1,
    name: 'Button1',
    title: 'Button 1',
    posX: 0,
    posY: 100,
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
    alignParentTop: false,
    alignParentBottom: false,
    alignParentStart: false,
    alignParentEnd: false,
    width: 80,
    height: 30,
    viewController: 1,
    parentContainer: null,
    clickListener: null
  }
];