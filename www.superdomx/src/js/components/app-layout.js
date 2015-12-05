import m from 'mithril';

import SideBar  from './sidebar';
import Logo     from './logo';
import Header   from './header';

function controller(attrs) {
  let {
    sendMessage,
    messages,
  } = attrs;

  return {
    sendMessage,
    messages,
  };
}

function view(ctrl) {
  return (
    <div>
      <Logo     {...ctrl} />
      <SideBar  {...ctrl} />
      <div className="wrap">
        <Header   {...ctrl} />
        <div class="content container"></div>
      </div>
    </div>
  );
}

var AppLayout = { controller, view };

export default AppLayout;
