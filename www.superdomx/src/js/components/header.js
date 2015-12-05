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
    <header class="page-header">
      <div class="navbar">
      </div>
    </header>
  );
}

const Header = { controller, view };

export default Header;

