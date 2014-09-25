App.UiControl = DS.Model.extend({
  name:               DS.attr('string'),
  
  posX:               DS.attr('number', {defaultValue: 0}),
  posY:               DS.attr('number', {defaultValue: 0}),

  paddingTop:         DS.attr('number', {defaultValue: 0}),
  paddingBottom:      DS.attr('number', {defaultValue: 0}),
  paddingStart:       DS.attr('number', {defaultValue: 0}),
  paddingEnd:         DS.attr('number', {defaultValue: 0}),

  marginTop:          DS.attr('number', {defaultValue: 0}),
  marginBottom:       DS.attr('number', {defaultValue: 0}),
  marginStart:        DS.attr('number', {defaultValue: 0}),
  marginEnd:          DS.attr('number', {defaultValue: 0}),

  alignParentTop:     DS.attr('boolean', {defaultValue: false}),
  alignParentBottom:  DS.attr('boolean', {defaultValue: false}),
  alignParentStart:   DS.attr('boolean', {defaultValue: false}),
  alignParentEnd:     DS.attr('boolean', {defaultValue: false}),

  width:              DS.attr('number', {defaultValue: 130}),
  height:             DS.attr('number', {defaultValue: 40}),

  viewController: DS.belongsTo('viewController'),
  parentContainer: DS.belongsTo('container', {inverse: 'uiControls'}),

  alignTop: DS.belongsTo('uiControl', {polymorphic: true, inverse: null}),
  alignBottom: DS.belongsTo('uiControl', {polymorphic: true, inverse: null}),
  alignStart: DS.belongsTo('uiControl', {polymorphic: true, inverse: null}),
  alignEnd: DS.belongsTo('uiControl', {polymorphic: true, inverse: null}),

  above: DS.belongsTo('uiControl', {polymorphic: true, inverse: null}),
  below: DS.belongsTo('uiControl', {polymorphic: true, inverse: null}),
  toStartOf: DS.belongsTo('uiControl', {polymorphic: true, inverse: null}),
  toEndOf: DS.belongsTo('uiControl', {polymorphic: true, inverse: null}),

  sameLevelControls: function() {
    var parentContainer = this.get('parentContainer');

    if (parentContainer != null) {
      return parentContainer.get('uiControls');
    }
    
    return this.get('viewController.uiControls');
  }.property(
    'parentContainer.uiControls.@each',
    'viewController.uiControls.@each'),

  siblings: function() {
    if (this.get('sameLevelControls') != null) {
      return this.get('sameLevelControls').without(this);
    }

    return null;
  }.property('sameLevelControls'),

  top: function() {
    if (this.get('alignTop')) {
      return this.get('alignTop.top');
    }
    else if (this.get('below')) {
      return this.get('below.bottom');
    }
    else if (this.get('alignParentTop')) {

      if (this.get('parentContainer') != null) {
        return 0;
      }
      else {
        // Offset of top bar
        return this.get('viewController.application.device.viewTop');
      }

    }
    else if (this.get('alignBottom')) {
      return this.get('alignBottom.bottom') - this.get('outerHeight');
    }
    else if (this.get('alignParentBottom')) {

      if (this.get('parentContainer') != null) {
        return this.get('bottom') - this.get('outerHeight');
      }
      else {
        return this.get('bottom') - this.get('outerHeight');
      }

    }
    else if (this.get('above')) {
      return this.get('bottom') - this.get('outerHeight');
    }
    else {

      if (this.get('parentContainer') != null) {
        return parseFloat(this.get('posY'));
      }
      else {
        // Offset of top bar
        return parseFloat(this.get('posY')) + this.get('viewController.application.device.viewTop');
      }
      
    }
  }.property(
    'posY',
    'outerHeight',
    'alignTop.top',
    'alignParentTop',
    'alignBottom.bottom',
    'alignParentBottom',
    'below.bottom',
    'viewController.application.device.viewTop',
    'above',
    'bottom'),

  bottom: function() {
    if (this.get('alignBottom')) {
      return this.get('alignBottom.bottom');
    }
    else if (this.get('alignParentBottom')) {

      if (this.get('parentContainer') != null) {
        return this.get('parentContainer.height');
      }
      else {
        // Check tab bar for menu in iOS
        if (this.get('viewController.application.device.platform') == 'ios' &&
          this.get('viewController.application.menu.menuItems.length') > 0) {
          return this.get('viewController.application.device.viewBottom') - 48;
        }

        return this.get('viewController.application.device.viewBottom');
      }
      
    }
    else if (this.get('above')) {
      return this.get('above.top');
    }
    else {
      return this.get('top') + parseFloat(this.get('outerHeight'));
    }
  }.property(
    'alignBottom.bottom',
    'alignParentBottom',
    'top',
    'outerHeight',
    'parentContainer.height',
    'above.top',
    'viewController.application.device.viewBottom',
    'viewController.application.menu.menuItems.length'),

  start: function() {
    if (this.get('alignStart')) {
      return this.get('alignStart.start');
    }
    else if (this.get('toEndOf')) {
      return this.get('toEndOf.end');
    }
    else if (this.get('alignParentStart')) {
      return 0;
    }
    else if (this.get('alignEnd')) {
      return this.get('alignEnd.end') - this.get('outerWidth');
    }
    else if (this.get('alignParentEnd')) {

      if (this.get('parentContainer') != null) {
        return this.get('parentContainer.width') - this.get('outerWidth');
      }
      else {
        return this.get('viewController.application.device.screenWidth') - this.get('outerWidth');
      }

    }
    else if (this.get('toStartOf')) {
      return this.get('end') - this.get('outerWidth');
    }
    else {
      return parseFloat(this.get('posX'));
    }
  }.property(
    'posX',
    'outerWidth',
    'parentContainer',
    'alignStart.start',
    'toEndOf.end',
    'alignEnd.end',
    'alignParentStart',
    'alignParentEnd',
    'toStartOf',
    'end',
    'viewController.application.device.screenWidth'),

  end: function() {
    if (this.get('alignEnd')) {
      return this.get('alignEnd.end');
    }
    else if (this.get('alignParentEnd')) {

      if (this.get('parentContainer') != null) {
        return this.get('parentContainer.width');
      }
      else {
        return this.get('viewController.application.device.screenWidth');
      }

    }
    else if (this.get('toStartOf')) {
      return this.get('toStartOf.start');
    }
    else {
      return this.get('start') + parseFloat(this.get('outerWidth'));
    }
  }.property(
    'alignEnd',
    'alignParentEnd',
    'start',
    'parentContainer',
    'toStartOf.start',
    'outerWidth',
    'viewController.application.device.screenWidth'),

  computedWidth: function() {
    return  parseFloat(this.get('end')) -
            parseFloat(this.get('start')) -
            parseFloat(this.get('marginStart')) -
            parseFloat(this.get('marginEnd'));
  }.property(
    'start',
    'end',
    'marginStart',
    'paddingStart',
    'paddingEnd',
    'marginEnd'),

  computedHeight: function() {
    return  parseFloat(this.get('bottom')) -
            parseFloat(this.get('top')) -
            parseFloat(this.get('marginTop')) -
            parseFloat(this.get('marginBottom'));
  }.property(
    'top',
    'bottom',
    'marginTop',
    'paddingTop',
    'paddingBottom',
    'marginBottom'),

  outerWidth: function() {
    return  parseFloat(this.get('marginStart')) +
            parseFloat(this.get('width')) +
            parseFloat(this.get('marginEnd'));
  }.property(
    'marginStart',
    'paddingStart',
    'width',
    'paddingEnd',
    'marginEnd'),

  outerHeight: function() {
    return  parseFloat(this.get('marginTop')) +
            parseFloat(this.get('height')) +
            parseFloat(this.get('marginBottom'));
  }.property(
    'marginTop',
    'paddingTop',
    'height',
    'paddingBottom',
    'marginBottom'),

  // Used to reload views
  didCreate: function() {
    this.set('name', this.get('id').replace(/[0-9]/g, '') + this.constructor.toString().split(".")[1]);
    
    var self = this;
    if (this.get('parentContainer')) {
      var uiControls = this.get('parentContainer.uiControls');
      uiControls.pushObject(self);
      this.get('parentContainer').save(); 
    }
    else {
      var viewController = this.get('viewController');
      viewController.get('uiControls').then(function (uiControls) {
        uiControls.pushObject(self);
        viewController.save();
      });

    this.save();
      
    }
  },

  deleteRecord: function() {
    var viewController = this.get('viewController');
    var self = this;

    if (viewController) {
      var constraints = [
        'alignTop',
        'alignBottom',
        'alignStart',
        'alignEnd',
        'above',
        'below',
        'toStartOf',
        'toEndOf'];


      viewController.get('uiControls').then(function(uiControls) {
        uiControls.forEach(function (uiControl) {
          constraints.forEach(function (constraint) {
            if (uiControl.get(constraint) == self) {
              uiControl.set(constraint, null);
              uiControl.save();
            }
          });
        });
      });
    }

    this._super();
  },

  decorateXml: function(xmlElem) {
    xmlElem.setAttribute('id', this.get('name'));

    xmlElem.setAttribute('posX', this.get('posX'));
    xmlElem.setAttribute('posY', this.get('posY'));

    xmlElem.setAttribute('paddingTop', this.get('paddingTop'));
    xmlElem.setAttribute('paddingBottom', this.get('paddingBottom'));
    xmlElem.setAttribute('paddingStart', this.get('paddingStart'));
    xmlElem.setAttribute('paddingEnd', this.get('paddingEnd'));

    xmlElem.setAttribute('marginTop', this.get('marginTop'));
    xmlElem.setAttribute('marginBottom', this.get('marginBottom'));
    xmlElem.setAttribute('marginStart', this.get('marginStart'));
    xmlElem.setAttribute('marginEnd', this.get('marginEnd'));

    xmlElem.setAttribute('alignParentTop', this.get('alignParentTop'));
    xmlElem.setAttribute('alignParentBottom', this.get('alignParentBottom'));
    xmlElem.setAttribute('alignParentStart', this.get('alignParentStart'));
    xmlElem.setAttribute('alignParentEnd', this.get('alignParentEnd'));

    xmlElem.setAttribute('width', this.get('width'));
    xmlElem.setAttribute('height', this.get('height'));

    //xmlElem.setAttribute('viewController', this.get('viewController.name'));
    //xmlElem.setAttribute('parentContainer', this.get('parentContainer.name'));

    if (this.get('alignTop')) {
      xmlElem.setAttribute('alignTop', this.get('alignTop').getRefPath(''));
    }
    if (this.get('alignBottom')) {
      xmlElem.setAttribute('alignBottom', this.get('alignBottom').getRefPath(''));
    }
    if (this.get('alignStart')) {
      xmlElem.setAttribute('alignStart', this.get('alignStart').getRefPath(''));
    }
    if (this.get('alignEnd')) {
      xmlElem.setAttribute('alignEnd', this.get('alignEnd').getRefPath(''));
    }

    if (this.get('above')) {
      xmlElem.setAttribute('above', this.get('above').getRefPath(''));
    }
    if (this.get('below')) {
      xmlElem.setAttribute('below', this.get('below').getRefPath(''));
    }
    if (this.get('toStartOf')) {
      xmlElem.setAttribute('toStartOf', this.get('toStartOf').getRefPath(''));
    }
    if (this.get('toEndOf')) {
      xmlElem.setAttribute('toEndOf', this.get('toEndOf').getRefPath(''));
    }

    if (this.get('viewController')) {
      xmlElem.setAttribute('viewController', this.get('viewController').getRefPath(''));
    }

    return xmlElem;
  },

  getRefPath: function(path) {
    var updatedPath = '/@' + this.get('xmlName') + '[id=\'' + this.get('name') + '\']';

    if (this.get('parentContainer') != null) {
      updatedPath = this.get('parentContainer').getRefPath(updatedPath);
    }
    else {
      updatedPath = this.get('viewController').getRefPath(updatedPath);
    }

    return updatedPath;
  },

  getRelatedUiControls: function() {
    var constraints = [
      'alignTop',
      'alignBottom',
      'alignStart',
      'alignEnd',
      'above',
      'below',
      'toStartOf',
      'toEndOf'];

    var self = this;

    return constraints.map(function (constraint) {
      return self.get(constraint);
    }).filter(function (item) {return item != null;});

  }

});