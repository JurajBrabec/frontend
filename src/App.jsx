import { h } from 'preact';
import { useState } from 'preact/hooks';
import axios from 'axios';
import config from './assets/get-config';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Sources from './components/Sources.jsx';

function App() {
  const [tower, setTower] = useState(config.towers[0].value);
  const towerData = {
    data: config.towers,
    selected: tower,
    onChange: setTower,
  };
  const [customer, setCustomer] = useState(config.customers[0].value);
  const customerData = {
    data: config.customers,
    selected: customer,
    onChange: setCustomer,
  };
  const [timePeriod, setTimePeriod] = useState(config.timeperiods[0].value);
  const timePeriodData = {
    data: config.timeperiods,
    selected: timePeriod,
    onChange: setTimePeriod,
  };
  const [sources, setSources] = useState([]);
  const reportData = {
    data: config.reports,
    onClick: (e) => {
      e.preventDefault();
      const report = e.target.name;
      const addSources = config.sources
        .filter((source) => source.report === report)
        .map((source) => {
          source.fields = config.fields.filter(
            (field) => field.source === source.name,
          );
          source.formats = config.formats.filter((format) =>
            RegExp(format.source).test(source.name),
          );
          source.links = config.links.filter((link) =>
            RegExp(link.source).test(source.name),
          );
          source.filters = config.filters.filter((filter) =>
            RegExp(filter.source).test(source.name),
          );
          source.sorts = config.sorts.filter((sort) =>
            RegExp(sort.source).test(source.name),
          );
          source.pagination = source.pivot === null ? 1 : 0;
          source.page = 1;
          source.highlight = 0;
          return source;
        });
      setSources((sources) => [...sources, ...addSources]);
    },
  };
  return (
    <div class="container-fluid px-0">
      <Navbar
        reports={reportData}
        tower={towerData}
        customer={customerData}
        timePeriod={timePeriodData}
      />
      <div class="container-fluid py-5">
        <div class="card-deck py-3">
          <div class="card">
            <div class="card-body">Tower: {tower}</div>
          </div>
          <div class="card">
            <div class="card-body">Customer: {customer}</div>
          </div>
          <div class="card">
            <div class="card-body">Time Period: {timePeriod}</div>
          </div>
          <div class="card">
            <div class="card-body">Reports: {sources.length}</div>
          </div>
        </div>
        <Sources sources={sources} setSources={setSources} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
