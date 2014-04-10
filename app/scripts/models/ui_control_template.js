var attr = DS.attr;

App.UiControlTemplate = DS.Model.extend({
  label: attr('string'),
  nameImg: attr('string'),
  type: attr('string')
});

App.UiControlTemplate.FIXTURES = [
  {id: 1, label: 'Ciao', nameImg: 'switch.png', type: 'switch'},
  {id: 2, label: 'SecondView', nameImg: 'button.png', type: 'button'}
];