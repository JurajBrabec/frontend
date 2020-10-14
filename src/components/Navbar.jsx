import { h } from 'preact';
import ComboBox from './ComboBox.jsx';
import Menu from './Menu.jsx';

export default function Navbar({
  config,
  reportOnClick,
  tower,
  setTower,
  customer,
  setCustomer,
  timePeriod,
  setTimePeriod,
}) {
  const categories = [
    ...new Set(config.reports.map((report) => report.category)),
  ];
  const link = (text, href = '') => (
    <li class="nav-item">
      <a class="nav-link" href={href}>
        {text}
      </a>
    </li>
  );

  return (
    <nav class="navbar fixed-top navbar-expand navbar-dark bg-dark p-1">
      <a class="navbar-brand" href="/">
        MARS
      </a>
      <ul class="navbar-nav mr-auto">
        {link('Home', '#')}
        {link('Reload')}
        {categories.map((category) =>
          category ? (
            <Menu
              name={category}
              items={config.reports.filter(
                (report) => report.category === category,
              )}
              onClick={reportOnClick}
            />
          ) : null,
        )}
      </ul>
      <form class="form-inline">
        <div class="input-group input-group-sm">
          <div class="input-group-prepend">
            <span class="input-group-text">Tower</span>
          </div>
          <ComboBox data={config.towers} selected={tower} onChange={setTower} />
        </div>
        <div class="input-group input-group-sm mx-1">
          <div class="input-group-prepend">
            <span class="input-group-text">Customer</span>
          </div>
          <ComboBox
            data={config.customers}
            selected={customer}
            onChange={setCustomer}
          />
        </div>
        <div class="input-group input-group-sm">
          <div class="input-group-prepend">
            <span class="input-group-text">Time</span>
          </div>
          <ComboBox
            data={config.timeperiods}
            selected={timePeriod}
            onChange={setTimePeriod}
          />
        </div>
      </form>
      <ul class="navbar-nav">{link('Admin', '/admin')}</ul>
    </nav>
  );
}
