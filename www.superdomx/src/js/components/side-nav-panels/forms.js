import m from 'mithril';

function controller(attrs) {
  let { sendMessage } = attrs;
  return {
  };
}

function view(ctrl) {
  return (
    <li class="panel ">
        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#side-nav" href="#forms-collapse"><i class="fa fa-pencil"></i> <span class="name">Forms</span></a>
        <ul id="forms-collapse" class="panel-collapse collapse ">
            <li class=""><a href="form_account.html">Account</a></li>
            <li class=""><a href="form_article.html">Article</a></li>
            <li class=""><a href="form_elements.html">Elements</a></li>
            <li class=""><a href="form_validation.html">Validation</a></li>
            <li class=""><a href="form_wizard.html">Wizard</a></li>
        </ul>
    </li>
  );
}

const Forms = { controller, view };

export default Forms ;

