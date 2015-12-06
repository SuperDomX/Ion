import m from 'mithril';

function buildMessage(msg) {
  return (
    <div class="chat-message">
        <div class="sender pull-left">
            <div class="icon">
                <img src="img/2.jpg" class="img-circle" alt="" />
            </div>
            <div class="time">
                4 min
            </div>
        </div>
        <div class="chat-message-body">
            <span class="arrow"></span>
            <div class="sender">
              <a href="#">
              USERNAME
              </a>
            </div>
            <div class="text log__message">
              {msg}
            </div>
        </div>
    </div>
  );
}

function controller(attrs) {
  let { messages } = attrs;

  return { messages };
}

function view(ctrl) {
  let { messages } = ctrl;

  return (
    <div id="chat-messages" className="log chat-messages">
      { messages().map(buildMessage) }
    </div>
  );
}

var Log = { controller, view };

export default Log;
