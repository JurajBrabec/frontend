import { h } from 'preact';

export default function Menu({ name, items, onClick }) {
  const menuDivider = () => <div className="dropdown-divider"></div>;
  const menuItem = ({ name, title }) => (
    <a name={name} class="dropdown-item" href="" onClick={onClick}>
      {title}
    </a>
  );
  const id = 'navDropDown' + name;
  return (
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        id={id}
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {name}
      </a>
      <div class="dropdown-menu" aria-labelledby={id}>
        {items.map((item) =>
          item.name === '---' ? menuDivider() : menuItem(item),
        )}
      </div>
    </li>
  );
}
