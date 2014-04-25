App.Device = DS.Model.extend({
  name: DS.attr('string'),
  label: DS.attr('string'),
  platform: DS.attr('string'),
  screenWidth: DS.attr('number'),
  screenHeight: DS.attr('number'),
  cssWidth: DS.attr('number'),
  cssHeight: DS.attr('number')
});

App.Device.FIXTURES = [
  {
    id: 1,
    name: 'iPhone5s',
    label: 'iPhone 5s',
    platform: 'ios',
    screenWidth: 320,
    screenHeight: 568,
    cssWidth: 312,
    cssHeight: 556
  },
  {id: 2, name: 'Nexus', label: 'Nexus 5', platform: 'android'}
];