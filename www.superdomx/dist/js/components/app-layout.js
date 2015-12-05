import m from 'mithril';

import SideBar  from './sidebar';
import Logo     from './logo';
import TopBar   from './topbar';

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
      <TopBar   {...ctrl} />
      <SideBar  {...ctrl} />
      <div class="content"></div>
    </div>
  );
}

var AppLayout = { controller, view };

export default AppLayout;
