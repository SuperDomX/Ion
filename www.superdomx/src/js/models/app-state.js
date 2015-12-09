import m from 'mithril';

let messages  = m.prop([]);
let widgets   = m.prop([]);


let widgetss   = m.prop([
  {
    header : 'Visits',
    widget : 'visits',
    grid   : 'col-md-8'
  },
  {
    header : 'Server Overview',
    widget : 'server-stats',
    grid   : 'col-md-4'
  },
  {
    header : 'Traffic Sources',
    widget : 'traffic',
    grid   : 'col-md-8'
  },
  {
    header : 'Feed',
    widget : 'feed',
    grid   : 'col-md-4'
  },
]);

let appState = {

  widgets() {
    return widgets().slice();
  },
  messages() {
    return messages().slice();
  },
  addMessage(msg) {
    messages().push(msg);
  },
};

export default appState;
