import m from 'mithril';

import Forms      from './side-nav-panels/forms';
import Stats      from './side-nav-panels/stats';
import Components from './side-nav-panels/components';
import Special    from './side-nav-panels/special';
import Tables     from './side-nav-panels/tables';
import UI         from './side-nav-panels/ui';
import Widgets    from './side-nav-panels/widgets';
import Menus      from './side-nav-panels/menus';

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
    <ul id="side-nav" class="side-nav">
      <li class="active">
          <a href="dashboard.html">
            <i class="fa fa-dashboard"></i> 
            <span class="name">
            Dashboard
            </span>
          </a>
      </li>
      <Components/>
      <UI/>
      <Widgets/>
      <Forms/>
      <Tables/>
      <Stats/>
      <Special/>
      <Menus/>
      <li class="visible-xs">
          <a href="login.html"><i class="fa fa-sign-out"></i> <span class="name">Sign Out</span></a>
      </li>
    </ul>
  );
}

const SideNav = { controller, view };

export default SideNav;

