import m from 'mithril';

function controller(attrs) {
  let { sendMessage } = attrs;
  return {

  };
}

function view(ctrl) {
  return (
    <li class="panel ">
        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#side-nav" href="#special-collapse"><i class="fa fa-leaf"></i> <span class="name">Special</span></a>
        <ul id="special-collapse" class="panel-collapse collapse ">
            <li class=""><a href="special_search.html">Search <sup class="text-warning fw-bold">new</sup></a></li>
            <li class=""><a href="special_invoice.html">Invoice</a></li>
            <li class=""><a href="special_inbox.html">Inbox &nbsp; <span class="label label-important">3</span></a></li>
            <li class=""><a href="login">Login</a></li>
            <li class=""><a href="error.html">Error Page</a></li>
            <li class=""><a href="landing.html" >Landing</a></li>
        </ul>
    </li>
  );
}

const Special = { controller, view };

export default Special ;


