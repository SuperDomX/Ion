import m from 'mithril';

function controller(attrs) {
  let { sendMessage } = attrs;
  return {
  };
}

function view(ctrl) {
  return (
    <li class="panel ">
        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#side-nav" href="#components-collapse"><i class="fa fa-tree"></i> <span class="name">Components</span></a>
        <ul id="components-collapse" class="panel-collapse collapse ">
            <li class=""><a href="component_calendar.html">Calendar</a></li>
            <li class=""><a href="component_maps.html" >Maps</a></li>
            <li class=""><a href="component_gallery.html">Gallery</a></li>
            <li class=""><a href="component_fileupload.html" >Fileupload</a></li>
            <li class=""><a href="component_bootstrap.html">Bootstrap</a></li>
            <li class=""><a href="component_list_groups.html">List Groups</a></li>
        </ul>
    </li>
  );
}

const Components = { controller, view };

export default Components ;


