import m from 'mithril';

function controller(attrs) {
  let { sendMessage } = attrs;
  return {
  };
}

function view(ctrl) {
  return (
    <li class="panel ">
        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#side-nav" href="#tables-collapse"><i class="fa fa-cog"></i> <span class="name">Tables</span></a>
        <ul id="tables-collapse" class="panel-collapse collapse ">
            <li class=""><a href="tables_static.html">Static <sup class="text-danger fw-bold">upd</sup></a></li>
            <li class=""><a href="tables_dynamic.html">Dynamic</a></li>
        </ul>
    </li>
  );
}

const Tables = { controller, view };

export default Tables ;


