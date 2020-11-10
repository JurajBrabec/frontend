import { h } from 'preact';
import { useState } from 'preact/hooks';
import ComboBox from './ComboBox.jsx';

export default function Sort({ sort, updateSort, fields, orders }) {
  const [editable, setEditable] = useState(true);
  return (
    <div class="d-flex flex-row align-items-center pr-1">
      {editable ? (
        <div class="input-group input-group-sm border-success">
          <ComboBox
            data={fields}
            selected={sort.field}
            onChange={(value) => updateSort({ ...sort, ...{ field: value } })}
          />
          <ComboBox
            data={orders}
            selected={sort.order}
            onChange={(value) => updateSort({ ...sort, ...{ order: value } })}
          />
          <div class="input-group-append">
            <button
              type="submit"
              class="btn btn-success"
              onClick={(e) => {
                e.stopPropagation();
                setEditable(false);
              }}
            >
              <span>&#10003;</span>
            </button>
          </div>
        </div>
      ) : (
        <div class="btn-group btn-group-sm">
          <button
            type="button"
            class="btn btn-light"
            onClick={(e) => {
              e.stopPropagation();
              setEditable(true);
            }}
          >
            <span>
              {fields.map((f) => (f.value === sort.field ? f.name : ''))}
              &nbsp;
            </span>
            <span>
              {orders.map((o) => (o.value === sort.order ? o.name : ''))}
            </span>
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={(e) => {
              e.stopPropagation();
              updateSort();
            }}
          >
            <span>&#10005;</span>
          </button>
        </div>
      )}
    </div>
  );
}
