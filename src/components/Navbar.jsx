import { h } from 'preact';
import ComboBox from './ComboBox.jsx';

export default function Navbar({ customer, timePeriod, tower }) {
  return (
    <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
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
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Reload
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Reports
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                Report 1
              </a>
              <a class="dropdown-item" href="#">
                Report 2
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Report 3
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
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
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/admin">
              Admin
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
