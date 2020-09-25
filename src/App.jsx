import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import axios from 'axios';
import defaultConfig from './assets/get-config';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Sources from './components/Sources.jsx';

function App() {
  const [config, setConfig] = useState({
    towers: [],
    customers: [],
    timeperiods: [],
    reports: [],
    copyright: '(C) 2020 Juraj Brabec',
  });
  const [tower, setTower] = useState('');
  const [customer, setCustomer] = useState('');
  const [timePeriod, setTimePeriod] = useState('');
  const [sources, setSources] = useState([]);
  const reportOnClick = (e) => {
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
  };
  useEffect(() => {
    const url = 'http://localhost/nbu/php.php?action=get-config';
    axios.get(url).then(
      (response) => {
        console.log('Config set');
        setConfig(response.data);
        setTimePeriod(response.data.timeperiods[0].value);
      },
      (error) => {
        console.log('Config NOT set');
        console.log(error);
        setConfig(defaultConfig);
        setTimePeriod(defaultConfig.timeperiods[0].value);
      },
    );
  }, []);
  return (
    <div class="container-fluid px-0">
      <Navbar
        config={config}
        tower={tower}
        setTower={setTower}
        customer={customer}
        setCustomer={setCustomer}
        timePeriod={timePeriod}
        setTimePeriod={setTimePeriod}
        reportOnClick={reportOnClick}
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
      <Footer config={config} />
    </div>
  );
}

export default App;
