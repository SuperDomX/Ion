import m from 'mithril';

function controller(attrs) {
  let { sendMessage } = attrs;

  return {
    message: m.prop(''),

    send(e) {
      const { message } = this;

      e.preventDefault();

      if(message()) {
        sendMessage(message());
        message('');
      }
    },
  };
}

function view(ctrl) {
  return (

  );
}

const Entry = { controller, view };

export default Entry;
