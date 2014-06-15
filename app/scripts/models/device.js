App.Device = DS.Model.extend({
  name: DS.attr('string'),
  label: DS.attr('string'),
  platform: DS.attr('string'),
  viewTop: DS.attr('number'),
  viewBottom: DS.attr('number'),
  screenWidth: DS.attr('number'),
  screenHeight: DS.attr('number'),
  cssWidth: DS.attr('number'),
  cssHeight: DS.attr('number')
});
/*
App.Device.FIXTURES = [
  {
    id: 1,
    name: 'iPhone5s',
    label: 'iPhone 5s',
    platform: 'ios',
    viewTop: 0,
    viewBottom: 568,
    screenWidth: 320,
    screenHeight: 568,
    cssWidth: 312,
    cssHeight: 556
  },
  {
    id: 2,
    name: 'Nexus5',
    label: 'Nexus 5',
    platform: 'android',
    viewTop: 73,
    viewBottom: 638,
    screenWidth: 388.31460674,
    screenHeight: 690.33707866,
    minHeight: 50,
    cssWidth: 353,
    cssHeight: 624
  }
];*/