var attr = DS.attr;

App.UiControlTemplate = DS.Model.extend({
  label: attr('string'),
  nameImg: attr('string'),
  type: attr('string')
});

/*
App.UiControlTemplate.FIXTURES = [
  {id: 1, label: 'Container View', nameImg: 'container.png', type: 'container'},
  {id: 2, label: 'Button', nameImg: 'button.png', type: 'button'},
  {id: 3, label: 'Label', nameImg: 'label.png', type: 'label'},
  {id: 4, label: 'Edit Text', nameImg: 'edittext.png', type: 'editText'},
  {id: 5, label: 'Web View', nameImg: 'webview.png', type: 'webView'},
  {id: 6, label: 'Image View', nameImg: 'imageview.png', type: 'imageView'},
  {id: 7, label: 'Video View', nameImg: 'videoview.png', type: 'videoView'},
  {id: 8, label: 'Audio Player', nameImg: 'audioplayer.png', type: 'audioPlayer'},
  {id: 9, label: 'List View', nameImg: 'listview.png', type: 'listView'},
  {id: 10, label: 'Grid View', nameImg: 'gridview.png', type: 'gridView'},
  {id: 11, label: 'Photocamera Controller', nameImg: 'photocameracontroller.png', type: 'photocameraController'},
  {id: 12, label: 'Videocamera Controller', nameImg: 'videocameracontroller.png', type: 'videocameraController'},
  {id: 13, label: 'Audio Recorder', nameImg: 'audiorecorder.png', type: 'audioRecorder'}
];*/