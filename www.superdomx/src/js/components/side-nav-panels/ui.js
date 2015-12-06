import m from 'mithril';

function controller(attrs) {
  let { sendMessage } = attrs;
  return {
  };
}

function view(ctrl) {
  return (
    <li class="panel ">
        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#side-nav" href="#ui-collapse"><i class="fa fa-magic"></i> <span class="name">User Interface</span></a>
        <ul id="ui-collapse" class="panel-collapse collapse ">
            <li class=""><a href="ui_buttons.html">Buttons</a></li>
            <li class=""><a href="ui_dialogs.html">Dialogs</a></li>
            <li class=""><a href="ui_notifications.html">Notifications</a></li>
            <li class=""><a href="ui_icons.html">Icons</a></li>
            <li class=""><a href="ui_tabs.html">Tabs</a></li>
            <li class=""><a href="ui_accordion.html">Accordion</a></li>
        </ul>
    </li>
  );
}

const UI = { controller, view };

export default UI ;


