import { h } from 'preact';
import ComboBox from './ComboBox.jsx';
import Menu from './Menu.jsx';

export default function Navbar({ reports, tower, customer, timePeriod }) {
  const categories = [
    ...new Set(reports.data.map((report) => report.category)),
  ];
  const link = (text, href = '') => (
    <li class="nav-item">
      <a class="nav-link" href={href}>
        {text}
      </a>
    </li>
  );

  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">
        MARS
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          {link('Home', '#')}
          {link('Reload')}
          {categories.map((category) =>
            category ? (
              <Menu
                name={category}
                items={reports.data.filter(
                  (report) => report.category === category,
                )}
                onClick={reports.onClick}
              />
            ) : null,
          )}
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <ComboBox
            name="Tower"
            data={tower.data}
            selected={tower.selected}
            onChange={tower.onChange}
          />
          <ComboBox
            name="Customer"
            data={customer.data}
            selected={customer.selected}
            onChange={customer.onChange}
          />
          <ComboBox
            name="Time"
            data={timePeriod.data}
            selected={timePeriod.selected}
            onChange={timePeriod.onChange}
          />
        </form>
        <ul class="navbar-nav">{link('Admin', '/admin')}</ul>
      </div>
    </nav>
  );
}
