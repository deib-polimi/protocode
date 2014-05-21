var attr = DS.attr;

App.UiControlTemplate = DS.Model.extend({
  label: attr('string'),
  nameImg: attr('string'),
  type: attr('string')
});

App.UiControlTemplate.FIXTURES = [
  {id: 1, label: 'Container View', nameImg: 'container.png', type: 'container'},
  {id: 2, label: 'Button', nameImg: 'button.png', type: 'button'},
  {id: 3, label: 'Label', nameImg: 'button.png', type: 'label'}
  /* {id: 3, label: 'Ciao', nameImg: 'switch.png', type: 'switch'}, */
];