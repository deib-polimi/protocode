var attr = DS.attr;

App.UiControl = DS.Model.extend({
  title: attr('string'),
  type: attr('string'),
  x: attr('number'),
  y: attr('number')
});

App.UiControl.FIXTURES = [
  {id: 1, title: 'Ciao', type: 'Button', x: '12', y: '13'},
  {id: 2, title: 'SecondView', type: 'Spinner', x: '20', y: '18'}
];