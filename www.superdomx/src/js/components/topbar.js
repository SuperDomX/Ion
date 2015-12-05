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
    <nav id="sidebar" class="sidebar nav-collapse collapse">
    </nav>
  );
}

const SideBar = { controller, view };

export default SideBar;

