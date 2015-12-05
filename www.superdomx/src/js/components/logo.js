import m from 'mithril';

function controller(attrs) {
  let { sendMessage } = attrs;
  return {
  };
}

function view(ctrl) {
  return (
    <div className="logo">
      <h4>
        SuperDom<b>X</b>
        <sup>ion</sup>
      </h4>
    </div>
  );
}

const Logo = { controller, view };

export default Logo;

