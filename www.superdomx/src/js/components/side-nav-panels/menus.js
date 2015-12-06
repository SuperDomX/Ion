import m from 'mithril';

function controller(attrs) {
  let { sendMessage } = attrs;
  return {
  };
}

function view(ctrl) {
  return (
    <li class="panel">
        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#side-nav" href="#menu-levels-collapse"><i class="fa fa-folder-open"></i> <span class="name">Menu Levels</span></a>
        <ul id="menu-levels-collapse" class="panel-collapse collapse">
            <li><a href="#">Item 1.1</a></li>
            <li><a href="#">Item 1.2</a></li>
            <li class="panel">
                <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#menu-levels-collapse" href="#sub-menu-1-collapse">Item 1.3</a>
                <ul id="sub-menu-1-collapse" class="panel-collapse collapse">
                    <li class="panel">
                        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#sub-menu-1-collapse" href="#sub-menu-3-collapse">Item 2.1</a>
                        <ul id="sub-menu-3-collapse" class="panel-collapse collapse">
                            <li><a href="#">Item 3.1</a></li>
                            <li><a href="#">Item 3.2</a></li>
                            <li><a href="#">Item 3.3</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Item 2.2</a></li>
                    <li class="panel">
                        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#sub-menu-1-collapse" href="#sub-menu-2-collapse">Item 2.3</a>
                        <ul id="sub-menu-2-collapse" class="panel-collapse collapse">
                            <li><a href="#">Item 3.4</a></li>
                            <li><a href="#">Item 3.5</a></li>
                            <li><a href="#">Item 3.6</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
  );
}

const Menus = { controller, view };

export default Menus ;


