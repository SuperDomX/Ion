import m from 'mithril';

import SideBar  from './sidebar';
import Logo     from './logo';
import Header   from './header';
import DashPanel   from './dashpanel';
import Chat       from './chat';

function controller(attrs) {
  let {
    sendMessage,
    messages,
    widgets,
  } = attrs;

  return {
    sendMessage,
    messages,
    widgets,
  };
}

function view(ctrl) {
  return (
    <div>
      <Logo     {...ctrl} />
      <SideBar  {...ctrl} />
      <div className="wrap">
        <Header {...ctrl} />
        <div class="content container">
          <h2 class="page-title">
            Dashboard 
            <small>
              Statistics and more
            </small>
          </h2>
          <DashPanel {...ctrl} />
          <Chat {...ctrl} />
        </div>
      </div>
    </div>
  );
}

var AppLayout = { controller, view };

export default AppLayout;
