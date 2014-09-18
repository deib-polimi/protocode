App.EditorController = Ember.ObjectController.extend(App.Saveable, {

    actions: {
      generateAppModel: function() {
        this.get('model').toXml().then(function (model) {
          var xmlString = '<?xml version="1.0" encoding="UTF-8"?>\n' + new XMLSerializer().serializeToString(model.documentElement);
          var blob = new Blob(
            [vkbeautify.xml(xmlString)],
            {type: "application/xml;charset=ASCII"});
          saveAs(blob, "protocode.xmi");
        });
      }
    }
});