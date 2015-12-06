import m from 'mithril';

function controller(attrs) {
  let { sendMessage } = attrs;
  return {
  };
}

function view(ctrl) {
  return (
    <li class="panel ">
        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#side-nav" href="#stats-collapse"><i class="fa fa-area-chart"></i> <span class="name">Statistics</span></a>
        <ul id="stats-collapse" class="panel-collapse collapse ">
            <li class=""><a href="stat_statistics.html">Stats</a></li>
            <li class=""><a href="stat_charts.html">Charts</a></li>
            <li class=""><a href="stat_realtime.html">Realtime</a></li>
        </ul>
    </li>
  );
}

const Stats = { controller, view };

export default Stats ;


