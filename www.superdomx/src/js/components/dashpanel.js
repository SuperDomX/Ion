import m from 'mithril';
import WidgetControls from './widget-controls';

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function buildWidget(cfg) {

  return (
    <div className={cfg.grid+" widget-container"}>
      <section class="widget" id="autoload-widget"
        data-widgster-load={cfg.widget+'.html'}
        data-widgster-autoload="true" 
        data-widgster-show-loader="true"
      >
          <header>
              <h4>
                {cfg.header.capitalize()}
              </h4>
              <WidgetControls />
          </header>
          <div class="body">
          </div>
      </section> 
    </div>
  );
}

function controller(attrs) {
  let { widgets, sendMessage, messages } = attrs;
  return {
    sendMessage : sendMessage,
    messages  : messages,
    message   : m.prop(''),
    widget    : m.prop(''),
    widgets   : widgets,
  };
}

function view(ctrl) {
  let { widgets, messages } = ctrl;
  return (
    <div className="row" >
      { widgets().map(buildWidget) }
    </div>
  );
}

const DashPanel = { controller, view };

export default DashPanel;
