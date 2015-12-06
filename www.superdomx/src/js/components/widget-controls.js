import m from 'mithril';

function controller(attrs) {
  let { controls } = attrs;
  return {
    controls : controls
  };
}

function view(ctrl) {
  return (
    <div class="widget-controls">
      <a data-widgster="load" title="Reload" href="#">
        <i class="glyphicon glyphicon-refresh"></i>
      </a>

      <a data-widgster="expand" title="Expand" href="#">
        <i class="glyphicon glyphicon-plus"></i>
      </a>
      <a data-widgster="collapse" title="Collapse" href="#">
        <i class="glyphicon glyphicon-minus"></i>
      </a>
      <a data-widgster="fullscreen" title="Full Screen" href="#">
        <i class="glyphicon glyphicon-resize-full"></i>
      </a>
      <a data-widgster="restore" title="Restore" href="#">
        <i class="glyphicon glyphicon-resize-small"></i>
      </a>
      <a data-widgster="close" title="Close" href="#">
        <i class="glyphicon glyphicon-remove"></i>
      </a>
    </div>
  );
}

const WidgetControls = { controller, view };

export default WidgetControls;

