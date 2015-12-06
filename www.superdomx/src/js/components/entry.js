import m from 'mithril';
import Log from './log';

function controller(attrs) {
  let { sendMessage, messages } = attrs;
  return {
    message: m.prop(''),
    messages : messages,
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
  let { messages } = ctrl;
  return (
    <div className="col-md-5 pull-right">
      <section class="widget large">
          <header>
              <h4>
                  Chat
              </h4>
              <div class="widget-controls">
                  <a title="Options" href="#"><i class="glyphicon glyphicon-cog"></i></a>
                  <a data-widgster="close" title="Close" href="#"><i class="glyphicon glyphicon-remove"></i></a>
              </div>
          </header>
          <div class="body">
              <div id="chat" class="chat">
                  <Log {...ctrl} />
                  <footer class="chat-footer row">
                      <form className="entry" onsubmit={ctrl.send.bind(ctrl)}>
                        <div class="col-xs-9">
                            <input id="new-message" type="text" 
                              className="form-control input-transparent entry__input"
                              autocomplete="off"
                              onchange={m.withAttr('value', ctrl.message)}
                              value={ctrl.message()}
                             placeholder="Enter your message.." />
                        </div>
                        <div class="col-xs-3">
                            <button type="submit" id="new-message-btn" className="entry__send btn btn-transparent btn-block">Send</button>
                        </div>
                      </form>
                  </footer> 
              </div>
          </div>
      </section> 
    </div>
  );
}

const Entry = { controller, view };

export default Entry;
