var attr = DS.attr;

App.UiControlTemplate = DS.Model.extend({
  label: attr('string'),
  imgSrc: attr('string'),
  type: attr('string')
});

App.UiControlTemplate.FIXTURES = [
  {id: 1, label: 'Ciao', imgSrc: 'proo', type: 'Button'},
  {id: 2, label: 'SecondView', imgSrc: 'proo', type: 'Spinner'}
];