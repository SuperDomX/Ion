import m from 'mithril';

function controller(attrs) {
  let { sendMessage } = attrs;
  return {
  };
}

function view(ctrl) {
  var year = new Date().getFullYear();
  return (
    <div className="logo">
      <h4>
        <a href="/">
          SuperDom<sub><b>X</b><sup>ion</sup></sub>
        </a> 
        <br/> 
        <small>
          &copy; {year}
        </small>
      </h4>
    </div>
  );
}

const Logo = { controller, view };

export default Logo;

