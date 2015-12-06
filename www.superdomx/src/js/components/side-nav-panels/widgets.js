import m from 'mithril';

function controller(attrs) {
  let { sendMessage } = attrs;
  return {

  };
}

function view(ctrl) {
  return (
    <li class="panel ">
        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#side-nav" href="#grid-collapse"><i class="fa fa-th"></i> <span class="name">Widgets</span></a>
        <ul id="grid-collapse" class="panel-collapse collapse ">
            <li class=""><a href="grid_basic.html">Basic</a></li>
            <li class=""><a href="grid_live.html">Live</a></li>
        </ul>
    </li>
  );
}

const Widgets  = { controller, view };

export default Widgets ;


