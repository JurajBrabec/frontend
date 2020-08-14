import { h } from 'preact';
import ComboBox from './ComboBox.jsx';

export default function Filter({ filter, fields, operators }) {
  console.log({ filter, fields, operators });
  return (
    <div class="d-inline p-1">
      <button class="btn btn-light btn-sm">
        <span class="badge badge-light">{filter.field}</span>
        <span class="badge badge-dark">{filter.operator}</span>
        <span class="badge badge-light">{filter.value}</span>
      </button>
    </div>
  );
}
