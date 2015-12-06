import m from 'mithril';
import WidgetControls from './widget-controls';
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
    <div className="col-md-4 widget-container">
      <section class="widget large">
          <header>
              <h4>
                  ShoutBox
                  </h4>
                  <WidgetControls />
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

const Chat = { controller, view };

export default Chat;
